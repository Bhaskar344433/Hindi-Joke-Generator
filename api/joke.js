const categories = {
  all: 'कॉलेज, टेक, घर-परिवार, दोस्ती या रोज़मर्रा की देसी ज़िंदगी में से कोई विषय',
  college: 'कॉलेज और पढ़ाई',
  tech: 'टेक और सोशल मीडिया',
  family: 'घर-परिवार',
  friends: 'यार-दोस्ती',
  daily: 'रोज़मर्रा की देसी ज़िंदगी',
};

function sendJson(response, status, body) {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.end(JSON.stringify(body));
}

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return sendJson(response, 405, { error: 'केवल POST अनुरोध स्वीकार हैं।' });
  }

  const { category, recentJokes } = request.body || {};
  if (typeof category !== 'string' || !Object.hasOwn(categories, category)) {
    return sendJson(response, 400, { error: 'चुटकुले की श्रेणी सही नहीं है।' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return sendJson(response, 503, { error: 'AI सेवा अभी सेट नहीं है।' });
  }

  const examples = Array.isArray(recentJokes)
    ? recentJokes
        .filter((joke) => typeof joke === 'string')
        .slice(0, 5)
        .map((joke) => joke.slice(0, 500))
    : [];
  const prompt = [
    `भारतीय युवाओं के लिए ${categories[category]} विषय पर एक मौलिक, छोटा और मज़ेदार हिंदी चुटकुला लिखें।`,
    'जोक स्वाभाविक देवनागरी हिंदी में हो और केवल चुटकुला हो—कोई भूमिका, शीर्षक, स्पष्टीकरण या अनुवाद नहीं।',
    'किसी समुदाय, धर्म, जाति, लिंग या व्यक्ति का अपमान न करें; साफ़-सुथरा, दोस्ताना हास्य रखें।',
    examples.length
      ? `इन हाल के चुटकुलों को दोहराएँ नहीं: ${JSON.stringify(examples)}`
      : '',
    'उत्तर वैध JSON object हो, जिसमें joke (string) और category (all, college, tech, family, friends, daily में से एक) हों।',
    category !== 'all'
      ? `category का मान "${category}" ही रखें।`
      : 'category में उस विषय की सही श्रेणी चुनें जिस पर चुटकुला लिखा है।',
  ]
    .filter(Boolean)
    .join('\n');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const apiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
        temperature: 0.9,
        max_tokens: 180,
      }),
      signal: controller.signal,
    });

    if (!apiResponse.ok) {
      console.error(`AI provider returned HTTP ${apiResponse.status}.`);
      return sendJson(response, 502, { error: 'AI सेवा से जोक नहीं मिल पाया।' });
    }

    const data = await apiResponse.json();
    const content = data.choices?.[0]?.message?.content;
    if (typeof content !== 'string') {
      throw new Error('AI provider returned no joke.');
    }

    const result = JSON.parse(content);
    if (
      typeof result.joke !== 'string' ||
      result.joke.trim().length < 10 ||
      result.joke.length > 500 ||
      !/[\u0900-\u097f]/.test(result.joke) ||
      !Object.hasOwn(categories, result.category) ||
      result.category === 'all' ||
      (category !== 'all' && result.category !== category)
    ) {
      throw new Error('AI provider returned an invalid joke.');
    }

    return sendJson(response, 200, {
      joke: result.joke.trim(),
      category: result.category,
    });
  } catch (error) {
    console.error('Could not generate a Hindi joke.', error);
    return sendJson(response, 502, { error: 'AI सेवा से जोक नहीं मिल पाया।' });
  } finally {
    clearTimeout(timeout);
  }
};
