// select .hamburger-menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const linkList = document.querySelector(".link-list");

// set click event listener
hamburgerMenu.addEventListener('click', () => {
  linkList.classList.toggle('active');
});