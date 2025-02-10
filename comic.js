//Fullscreen button
document.addEventListener('DOMContentLoaded', () => {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const exitFullscreenBtn = document.getElementById('exit-fullscreen-btn');
    const comicContainer = document.getElementById('comic-container');

    fullscreenBtn.addEventListener('click', () => {
        comicContainer.classList.add('fullscreen');
        fullscreenBtn.classList.add('hidden');
        exitFullscreenBtn.classList.remove('hidden');
    });

    exitFullscreenBtn.addEventListener('click', () => {
        comicContainer.classList.remove('fullscreen');
        fullscreenBtn.classList.remove('hidden');
        exitFullscreenBtn.classList.add('hidden');
    });
});

//Comic-secton Navbar BG Change
document.addEventListener('DOMContentLoaded', (event) => {
  const topnav = document.querySelector('.topnav');
  const comicSection = document.querySelector('#comic-section');

  window.addEventListener('scroll', () => {
    const sectionTop = comicSection.offsetTop;
    const sectionHeight = comicSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
      topnav.classList.add('black-bg');
    } else {
      topnav.classList.remove('black-bg');
    }
  });
});

//Mobile Navigation buttons
function toggleComicNavButtons() {
    var nav = document.getElementById('comic-navigation');
    var button = document.getElementById('toggle-button');
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        button.classList.remove('rotated');
    } else {
        nav.classList.add('open');
        button.classList.add('rotated');
    }
}
