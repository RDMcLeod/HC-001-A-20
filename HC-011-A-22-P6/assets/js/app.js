//!TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton= document.querySelector('menu-toggle-button');
const menuElement= document.querySelector('menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active')
    menuToggleButton.classList.toggle('active')
}
menuToggleButton.addEventListener('click', toggleMenu)




// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE

// !SCROLL REVEAL