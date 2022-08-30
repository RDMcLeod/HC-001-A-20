//! === ADD HEADER STYLES ON SCROLL ===
const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 30 ? headerElement.classList.add('active'): headerElement.classList.remove('active');
}
window.addEventListener('scroll', headerScroll);

//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar_menu');
const toggleMenu = ()=> {
    navbarMenu.classList.toggle('active');
}
menuToggler.addEventListener('click', toggleMenu);

// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const linksToggleMenu = (e) => {
    if (e.target.classlist.contains('navbar_list-link'))navbarMenu.classList.remove('active');
}
window.addEventListener('click', linksToggleMenu);
//! === SWIPER ===
const swiper = new swiper('.myswiper',{
    effect:'coverflow', 
    grabCursor: true,
    centerSlides: true,
    slidePerView: 'auto',
    coverflowEffect:{
        rotate: 50,
        stretch:0,
        depth:100,
        modifier:1,
        slideShadows: true
    }
})
//! === SCROLL REVEAL ===