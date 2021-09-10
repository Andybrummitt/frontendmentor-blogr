console.log('woop')

//  Navbar Functionality

const menuBtn = document.querySelector('.hb-menu-btn');
const navMenu = document.querySelector('.nav-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        navMenu.classList.remove('hide');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        navMenu.classList.add('hide');
        menuOpen = false;
    }
})