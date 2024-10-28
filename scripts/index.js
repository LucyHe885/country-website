const navButton = document.getElementById('site-nav-button');
const navList = document.getElementById('site-nav-list');

navButton.addEventListener('click', () => {
    navList.classList.toggle('toggled');
});


document.getElementById('contact-form').addEventListener('send-your-message', (event)=> {
const contactForm = event.target
if(!validateContactForm(contactForm)) {
    event.preventDefault()
    displayError(contactForm,'Invalid input')
}
})
