const jokeBox = document.getElementById('jokeBox');
const categorySelect = document.getElementById('category');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const categoryTag = document.getElementById('categoryTag');
const statusText = document.getElementById('statusText');
const themeToggle = document.getElementById('themeToggle');

let currentJoke = '';

function updateCategoryTag() {
  const selected = categorySelect.value;
  categoryTag.textContent = selected === 'Any' ? 'सभी' : selected;
}

async function fetchJoke() {
  const category = categorySelect.value;
  const endpoint = category === 'Any' ? 'https://v2.jokeapi.dev/joke/Any?type=single' : `https://v2.jokeapi.dev/joke/${category}?type=single`;

  jokeBox.textContent = 'मज़ेदार लोड हो रहा है...';
  jokeBox.classList.add('loading');
  statusText.textContent = 'लोड हो रहा है';

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (!response.ok || data.error) {
      throw new Error(data.message || 'जोक नहीं मिला');
    }

    currentJoke = data.joke || 'आज का मज़ा नहीं मिला। फिर कोशिश करें!';
    jokeBox.textContent = currentJoke;
    statusText.textContent = 'तैयार';
  } catch (error) {
    currentJoke = 'ओह! मज़ा लोड नहीं हुआ। थोड़ी देर बाद फिर कोशिश करें।';
    jokeBox.textContent = currentJoke;
    statusText.textContent = 'त्रुटि';
    console.error(error);
  } finally {
    jokeBox.classList.remove('loading');
  }
}

async function copyJoke() {
  if (!currentJoke) return;

  try {
    await navigator.clipboard.writeText(currentJoke);
    statusText.textContent = 'कॉपी हो गया';
    copyBtn.textContent = 'कॉपी हो गया';
    setTimeout(() => {
      copyBtn.textContent = 'कॉपी करें';
      statusText.textContent = 'तैयार';
    }, 1200);
  } catch (error) {
    statusText.textContent = 'कॉपी नहीं हुआ';
    console.error(error);
  }
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  themeToggle.textContent = isLight ? '🌙' : '☀️';
}

categorySelect.addEventListener('change', () => {
  updateCategoryTag();
  fetchJoke();
});

generateBtn.addEventListener('click', fetchJoke);
copyBtn.addEventListener('click', copyJoke);
themeToggle.addEventListener('click', toggleTheme);

updateCategoryTag();
fetchJoke();
