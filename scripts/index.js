const navButton = document.getElementById('site-nav-button');
const navList = document.getElementById('site-nav-list');

navButton.addEventListener('click', () => {
    navList.classList.toggle('toggled');
});


