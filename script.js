const languageButton = document.querySelector('.language-button');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
let language = 'zh';

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh][data-en]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageButton.textContent = language === 'zh' ? 'EN' : '中文';
  document.title = language === 'zh' ? '丁慨然 · Kairan Ding' : 'Kairan Ding · AI & Robotics';
}

languageButton.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
