//!TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton= document.querySelector('menu-toggle-button');
const menuElement= document.querySelector('menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active')
    menuToggleButton.classList.toggle('active')
}
menuToggleButton.addEventListener('click', toggleMenu)

// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK
const removeActiveLinkClass = e => {
    if(e.target.classlist.contains('list-link')){
    menuElement.classList.remove('active')
    menuToggleButton.classList.toggle('active')
    }
}
document.addEventListener('click',removeActiveLinkClass);

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton= document.querySelector('theme-toggle-button');
const bodyElement = document.body;

const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');
}





// !SCROLL REVEAL