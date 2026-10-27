const jokes = [
  {
    id: 'college-attendance',
    category: 'college',
    text: 'टीचर: आज फिर लेट? छात्र: मैम, सपने में कॉलेज आ गया था। टीचर: तो? छात्र: फिर नींद खुली तो लगा, आज छुट्टी है।',
  },
  {
    id: 'college-exam',
    category: 'college',
    text: 'दोस्त: पेपर कैसा हुआ? मैं: सवाल तो जाने-पहचाने थे। दोस्त: फिर? मैं: बस जवाबों से हमारी पहचान नहीं थी।',
  },
  {
    id: 'college-library',
    category: 'college',
    text: 'लाइब्रेरी में किताब खोलते ही नींद क्यों आती है? क्योंकि ज्ञान भी कहता है—पहले आराम से बैठो, फिर मिलते हैं।',
  },
  {
    id: 'college-group',
    category: 'college',
    text: 'ग्रुप प्रोजेक्ट में सबसे ज़रूरी हुनर क्या है? आख़िरी स्लाइड पर सबके नाम बराबर फ़ॉन्ट में लिखना।',
  },
  {
    id: 'college-result',
    category: 'college',
    text: 'रिज़ल्ट देखकर पापा बोले, “कुछ सीख मिली?” मैंने कहा, “हाँ, अगली बार रोल नंबर भी सही डालूँगा।”',
  },
  {
    id: 'college-notes',
    category: 'college',
    text: 'दोस्त के नोट्स इतने साफ़ थे कि पढ़ाई शुरू करने से पहले मैंने उनसे माफ़ी माँगी—हाइलाइटर लगाने वाला हूँ।',
  },
  {
    id: 'tech-upi',
    category: 'tech',
    text: 'दोस्त ने चाय के पैसे UPI से भेजे। चायवाले ने पूछा, “कैश नहीं?” दोस्त बोला, “चाचा, जेब में तो सिर्फ़ क्यूआर कोड की इज़्ज़त है।”',
  },
  {
    id: 'tech-reels',
    category: 'tech',
    text: 'मैंने फ़ोन रखा और सोचा, अब पाँच मिनट कुछ नहीं देखूँगा। फ़ोन ने स्क्रीन जगा दी—“तुम ठीक तो हो?”',
  },
  {
    id: 'tech-wifi',
    category: 'tech',
    text: 'घर का वाई-फ़ाई बंद हुआ तो सब पहली बार एक-दूसरे से मिले। मम्मी बोलीं, “तुम लोग इसी घर में रहते हो?”',
  },
  {
    id: 'tech-ai',
    category: 'tech',
    text: 'मैंने एआई से पूछा, “मेरी सबसे बड़ी ताक़त क्या है?” जवाब आया, “आपका आत्मविश्वास।” मैंने पूछा, “और कमज़ोरी?” बोला, “वही जवाब।”',
  },
  {
    id: 'tech-battery',
    category: 'tech',
    text: 'फ़ोन की बैटरी १% पर थी, फिर भी मैंने वीडियो चलाया। रिश्ते निभाने की आदत है—मुश्किल वक़्त में साथ नहीं छोड़ता।',
  },
  {
    id: 'tech-password',
    category: 'tech',
    text: 'पासवर्ड इतना मज़बूत रखा कि अब मुझे ही अंदर नहीं आने देता। डिजिटल सुरक्षा पूरी, मालिक बाहर।',
  },
  {
    id: 'family-mother',
    category: 'family',
    text: 'मम्मी: फ़ोन छोड़कर ज़रा सब्ज़ी ले आओ। मैं: कौन-सी? मम्मी: जो स्क्रीन पर नहीं, मंडी में मिलती है।',
  },
  {
    id: 'family-relatives',
    category: 'family',
    text: 'रिश्तेदार: आगे का क्या प्लान है? मैंने कहा, “अभी तो चाय का।” बोले, “नहीं, ज़िंदगी का!” मैंने कहा, “पहले चाय तो आने दो।”',
  },
  {
    id: 'family-dinner',
    category: 'family',
    text: 'घर पर पूछा, “खाने में क्या है?” जवाब मिला, “जो बना है।” हमारे घर का मेन्यू भी सीधा जवाब देता है।',
  },
  {
    id: 'family-shopping',
    category: 'family',
    text: 'पापा बाज़ार में बोले, “बस देखने आए हैं।” दुकानदार ने कहा, “अंकल, ये लाइन तो मैं भी घर पर बोलता हूँ।”',
  },
  {
    id: 'family-wakeup',
    category: 'family',
    text: 'मम्मी की आवाज़ में अलार्म से ज़्यादा फ़ीचर हैं—पहली बार प्यार, दूसरी बार चेतावनी, तीसरी बार पूरा घर जाग जाता है।',
  },
  {
    id: 'family-chai',
    category: 'family',
    text: 'घर में चाय कौन बनाएगा, इस पर मीटिंग हुई। फ़ैसला हुआ—जो मीटिंग बुलाएगा, वही बनाएगा। अब सब चुप हैं।',
  },
  {
    id: 'friends-plan',
    category: 'friends',
    text: 'हमारे दोस्तों का प्लान इतना पक्का था कि तीन बार बना, चार बार बदला और आख़िर में सबने घर पर ही “मज़ा आया” लिख दिया।',
  },
  {
    id: 'friends-bill',
    category: 'friends',
    text: 'बिल आते ही दोस्त बोला, “मैं तो बस पानी पीने आया था।” वेटर ने कहा, “सर, पानी भी टेबल पर ही आया था।”',
  },
  {
    id: 'friends-photo',
    category: 'friends',
    text: 'दोस्त ने कहा, “एक कैंडिड फोटो ले।” फिर आधे घंटे तक सबने ऐसे पोज़ दिए जैसे फोटो को पहले से पता हो।',
  },
  {
    id: 'friends-gym',
    category: 'friends',
    text: 'दोस्त ने जिम जॉइन किया। मैंने पूछा, “कितने दिन जाओगे?” बोला, “फ़ीस देखकर तो कम-से-कम तीन महीने!”',
  },
  {
    id: 'friends-reply',
    category: 'friends',
    text: 'दोस्त का “बस पाँच मिनट में पहुँच रहा हूँ” सुनकर मैंने आराम से नाश्ता मँगाया। दोस्ती में अनुभव भी काम आता है।',
  },
  {
    id: 'friends-secret',
    category: 'friends',
    text: 'मैंने दोस्त से कहा, “ये बात किसी को मत बताना।” उसने कहा, “बिल्कुल नहीं।” फिर बोला, “किसे बतानी थी?”',
  },
  {
    id: 'daily-auto',
    category: 'daily',
    text: 'ऑटो वाले भैया ने कहा, “मीटर से चलेंगे।” मैंने राहत की साँस ली। फिर बोले, “मीटर तो बंद है, पर भावना वही है।”',
  },
  {
    id: 'daily-metro',
    category: 'daily',
    text: 'मेट्रो में सीट मिलते ही मैंने फ़ोन निकाला। सामने वाले अंकल बोले, “बेटा, मंज़िल आ जाए तो बता देना।” मैंने कहा, “अंकल, मेरा फ़ोन ही बता देगा।”',
  },
  {
    id: 'daily-chai',
    category: 'daily',
    text: 'चायवाले भैया ने पूछा, “कम चीनी?” मैंने कहा, “हाँ।” बोले, “तो फिर साथ में बिस्कुट ज़्यादा ले लो।”',
  },
  {
    id: 'daily-weather',
    category: 'daily',
    text: 'मौसम ने कहा, “आज ठंड रहेगी।” मैंने स्वेटर निकाला। दोपहर ने कहा, “मज़ाक था।” अब स्वेटर भी मुझे देख रहा है।',
  },
  {
    id: 'daily-delivery',
    category: 'daily',
    text: 'डिलीवरी ऐप बोला, “आपका ऑर्डर पास है।” मैं दरवाज़े पर गया—पास तो था, बस उसी शहर में नहीं।',
  },
  {
    id: 'daily-market',
    category: 'daily',
    text: 'सब्ज़ीवाले ने कहा, “आज टमाटर बहुत अच्छे हैं।” मैंने कहा, “भैया, तारीफ़ से दाम कम होंगे?” बोले, “नहीं, पर माहौल अच्छा हो जाएगा।”',
  },
];

const categoryNames = {
  all: 'सबका मज़ा',
  college: 'कॉलेज और पढ़ाई',
  tech: 'टेक और सोशल मीडिया',
  family: 'घर-परिवार',
  friends: 'यार-दोस्ती',
  daily: 'रोज़मर्रा की देसी ज़िंदगी',
};

const jokeBox = document.getElementById('jokeBox');
const categorySelect = document.getElementById('category');
const generateBtn = document.getElementById('generateBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const shareBtn = document.getElementById('shareBtn');
const clearFavoritesBtn = document.getElementById('clearFavorites');
const favoritesList = document.getElementById('favoritesList');
const historyList = document.getElementById('historyList');
const categoryTag = document.getElementById('categoryTag');
const statusText = document.getElementById('statusText');
const themeToggle = document.getElementById('themeToggle');

const storageKeys = {
  favorites: 'hansiAddaFavorites',
  history: 'hansiAddaHistory',
  theme: 'hansiAddaTheme',
};

let currentJoke = null;
let favorites = loadSavedIds(storageKeys.favorites);
let history = loadSavedIds(storageKeys.history);

function findJoke(id) {
  return jokes.find((joke) => joke.id === id);
}

function loadSavedIds(key) {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return [];

    const ids = JSON.parse(saved);
    if (!Array.isArray(ids)) {
      throw new Error(`Saved data for ${key} is not a list.`);
    }

    return ids.filter((id) => typeof id === 'string' && findJoke(id));
  } catch (error) {
    console.error(`Could not load saved jokes (${key}).`, error);
    statusText.textContent = 'सेव की सूची नहीं खुली';
    return [];
  }
}

function saveIds(key, ids) {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
    return true;
  } catch (error) {
    console.error(`Could not save jokes (${key}).`, error);
    statusText.textContent = 'सेव नहीं हो पाया';
    return false;
  }
}

function setStatus(message) {
  statusText.textContent = message;
}

function renderJoke() {
  if (!currentJoke) return;

  jokeBox.textContent = currentJoke.text;
  categoryTag.textContent = categoryNames[currentJoke.category];
  const isFavorite = favorites.includes(currentJoke.id);
  favoriteBtn.textContent = isFavorite ? '♥ पसंदीदा' : '♡ पसंद में जोड़ें';
  favoriteBtn.setAttribute('aria-pressed', String(isFavorite));
}

function renderList(listElement, ids, emptyMessage) {
  listElement.replaceChildren();

  if (ids.length === 0) {
    const emptyItem = document.createElement('li');
    emptyItem.className = 'empty-list';
    emptyItem.textContent = emptyMessage;
    listElement.append(emptyItem);
    return;
  }

  ids.forEach((id) => {
    const joke = findJoke(id);
    if (!joke) return;

    const item = document.createElement('li');
    const button = document.createElement('button');
    button.className = 'list-joke';
    button.type = 'button';
    button.dataset.jokeId = joke.id;
    button.textContent = joke.text;
    button.setAttribute('aria-label', `यह चुटकुला फिर सुनें: ${joke.text}`);
    item.append(button);
    listElement.append(item);
  });
}

function renderSavedLists() {
  renderList(favoritesList, favorites, 'अभी कोई पसंदीदा चुटकुला नहीं।');
  renderList(historyList, history, 'चुटकुले सुनना शुरू करें!');
}

function getAvailableJokes() {
  const selectedCategory = categorySelect.value;
  return jokes.filter(
    (joke) => selectedCategory === 'all' || joke.category === selectedCategory,
  );
}

function showNextJoke() {
  const availableJokes = getAvailableJokes();
  const choices = availableJokes.filter((joke) => joke.id !== currentJoke?.id);
  const pool = choices.length > 0 ? choices : availableJokes;
  currentJoke = pool[Math.floor(Math.random() * pool.length)];

  history = [currentJoke.id, ...history.filter((id) => id !== currentJoke.id)].slice(
    0,
    5,
  );
  saveIds(storageKeys.history, history);
  renderJoke();
  renderSavedLists();
  setStatus('तैयार');
}

function toggleFavorite() {
  if (!currentJoke) return;

  if (favorites.includes(currentJoke.id)) {
    favorites = favorites.filter((id) => id !== currentJoke.id);
    setStatus('पसंदीदा से हटाया');
  } else {
    favorites = [currentJoke.id, ...favorites];
    setStatus('पसंदीदा में जोड़ा');
  }

  saveIds(storageKeys.favorites, favorites);
  renderJoke();
  renderSavedLists();
}

async function copyText(text) {
  if (!navigator.clipboard?.writeText) {
    throw new Error('Clipboard access is unavailable in this browser.');
  }
  await navigator.clipboard.writeText(text);
}

async function shareJoke() {
  if (!currentJoke) return;

  const text = `${currentJoke.text}\n\n— हँसी अड्डा`;
  try {
    if (navigator.share) {
      await navigator.share({ title: 'हँसी अड्डा', text });
      setStatus('शेयर हो गया');
    } else {
      await copyText(text);
      setStatus('चुटकुला कॉपी हुआ — अब शेयर करें');
    }
  } catch (error) {
    if (error.name === 'AbortError') return;
    console.error('Could not share the joke.', error);
    setStatus('शेयर नहीं हो पाया');
  }
}

function clearFavorites() {
  if (favorites.length === 0) {
    setStatus('पसंदीदा सूची पहले से खाली है');
    return;
  }

  favorites = [];
  saveIds(storageKeys.favorites, favorites);
  renderJoke();
  renderSavedLists();
  setStatus('पसंदीदा सूची साफ़ हुई');
}

function setTheme(isLight) {
  document.body.classList.toggle('light-theme', isLight);
  themeToggle.textContent = isLight ? '🌙' : '☀️';
  themeToggle.setAttribute(
    'aria-label',
    isLight ? 'गहरी थीम चालू करें' : 'हल्की थीम चालू करें',
  );
}

function toggleTheme() {
  const isLight = !document.body.classList.contains('light-theme');
  setTheme(isLight);
  try {
    localStorage.setItem(storageKeys.theme, isLight ? 'light' : 'dark');
  } catch (error) {
    console.error('Could not save the selected theme.', error);
    setStatus('थीम बदली, पर सेव नहीं हुई');
  }
}

categorySelect.addEventListener('change', showNextJoke);
generateBtn.addEventListener('click', showNextJoke);
favoriteBtn.addEventListener('click', toggleFavorite);
shareBtn.addEventListener('click', shareJoke);
clearFavoritesBtn.addEventListener('click', clearFavorites);
themeToggle.addEventListener('click', toggleTheme);

favoritesList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-joke-id]');
  if (!button) return;
  currentJoke = findJoke(button.dataset.jokeId);
  renderJoke();
  setStatus('पसंदीदा चुटकुला');
});

historyList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-joke-id]');
  if (!button) return;
  currentJoke = findJoke(button.dataset.jokeId);
  renderJoke();
  setStatus('पुराना चुटकुला');
});

renderSavedLists();
try {
  setTheme(localStorage.getItem(storageKeys.theme) === 'light');
} catch (error) {
  console.error('Could not load the selected theme.', error);
  setTheme(false);
}
showNextJoke();
