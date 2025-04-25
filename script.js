const scrollContainer = document.querySelector('.scroll-content');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

scrollLeftButton.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -100, // Adjust scroll distance as needed
    behavior: 'smooth',
  });
});

scrollRightButton.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 100, // Adjust scroll distance as needed
    behavior: 'smooth',
  });
});
