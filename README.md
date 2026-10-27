# हँसी अड्डा — हिंदी चुटकुले

कॉलेज, टेक, घर-परिवार, दोस्ती और रोज़मर्रा की देसी ज़िंदगी पर हिंदी चुटकुलों का वेब ऐप। ऑनलाइन होने पर यह OpenAI से नया जोक बनाने की कोशिश करता है; AI सेटअप या इंटरनेट न होने पर इसमें मौजूद जोक्स से काम चलता रहता है।

## फीचर्स
- श्रेणी के अनुसार हिंदी चुटकुले
- OpenAI से नया जोक बनाना (API key केवल server पर रखी जाती है)
- ऑफ़लाइन curated जोक्स का fallback
- पसंदीदा चुटकुले और हाल में सुने चुटकुले
- चुटकुला फिर से सुनने के लिए सूची में चुनना
- शेयर करना; जहाँ शेयर सुविधा उपलब्ध न हो, वहाँ शेयर करने के लिए कॉपी करना
- लाइट/डार्क थीम
- पसंदीदा, इतिहास और थीम को ब्राउज़र में सहेजना

## स्थानीय ऑफ़लाइन उपयोग
सिर्फ़ ऑफ़लाइन जोक्स चलाने के लिए फ़ोल्डर में लोकल static server शुरू करें:

```bash
python -m http.server 8000
```

ब्राउज़र में जाकर खोलें:

```bash
http://localhost:8000
```

इस तरीके में AI endpoint उपलब्ध नहीं होगा, इसलिए ऐप curated offline जोक्स दिखाएगा।

## ऑनलाइन AI जोक्स चालू करें
AI key को सुरक्षित रखने के लिए API फ़ंक्शन server पर चलना चाहिए। इस प्रोजेक्ट को Vercel पर deploy करें, फिर Vercel project के **Settings → Environment Variables** में `OPENAI_API_KEY` जोड़ें। यह key browser code या GitHub में न डालें। चाहें तो `OPENAI_MODEL` भी सेट करें; डिफ़ॉल्ट `gpt-4o-mini` है। Environment variable जोड़ने के बाद नया deployment करें।

लोकल पर API के साथ चलाने के लिए Vercel CLI install और project link करें:

```bash
npm install --global vercel
vercel link
vercel env pull .env.local
vercel dev
```

`vercel env pull` आपके linked project के environment variables को ignored `.env.local` file में लाता है। ऐप को ऐसे static hosting (जैसे GitHub Pages) पर अकेले deploy करने पर `/api/joke` फ़ंक्शन नहीं चलेगा; उस स्थिति में curated offline जोक्स fallback होंगे।

AI provider के उपयोग पर शुल्क लग सकता है। अपनी OpenAI API key की billing और usage limits provider dashboard में नियंत्रित करें।

## फ़ाइलें
- `index.html` – हिंदी इंटरफ़ेस
- `style.css` – ऐप की स्टाइल और मोबाइल लेआउट
- `script.js` – ऑनलाइन/ऑफ़लाइन जोक्स, पसंदीदा, इतिहास, शेयर और थीम
- `api/joke.js` – API key को server पर रखकर AI जोक बनाना
