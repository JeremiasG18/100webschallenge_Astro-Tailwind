const toggleBtn = document.querySelector('#toggle-btn');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const navbar = document.querySelector('#navbar');

toggleBtn.addEventListener('click', () => {
    const isOpen = navbar?.hasAttribute('hidden');
    
    if (isOpen) {
        openMenu?.classList.add('hidden');
        closeMenu?.classList.remove('hidden');
        navbar.removeAttribute('hidden');
        navbar.classList.remove('invisible');
    }else{
        openMenu?.classList.remove('hidden');
        closeMenu?.classList.add('hidden');
        navbar.setAttribute('hidden', '');
        navbar.classList.add('visible');
        console.log('adios');
    }
    
});

// const navLinks = document.querySelector('#nav-links');

// toggleBtn?.addEventListener('click', () => {
//     let isOpen = navLinks?.classList.contains('show-links');

//     isOpen ? navLinks?.classList.remove('show-links') : navLinks?.classList.add('show-links');
// });

// window.addEventListener('resize', () => {
//     // let isOpen = navLinks?.classList.contains('show-links');

//     if (window.innerWidth.valueOf() <= 768) {
//         toggleBtn.removeAttribute('hidden');

//         // if (isOpen) {
//         //     navLinks?.classList.remove('show-links')
//         // }
//     }else {
//         toggleBtn.setAttribute('hidden', '');    
//     }
// });