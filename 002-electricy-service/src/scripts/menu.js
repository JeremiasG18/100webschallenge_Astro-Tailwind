const toggleBtn = document.querySelector('#toggle-btn');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const navbar = document.querySelector('#navbar');

if (window.innerWidth >= 768) {
    const isVisible = navbar?.hasAttribute('hidden');

    if (isVisible) {
        navbar.removeAttribute('hidden');
        toggleBtn.setAttribute('hidden', '');
    }
}


toggleBtn.addEventListener('click', () => {
    const isOpen = navbar?.hasAttribute('hidden');
    
    if (isOpen) {
        openMenu?.classList.add('hidden');
        closeMenu?.classList.remove('hidden');

        navbar?.removeAttribute('hidden');
        
    }else{
        openMenu?.classList.remove('hidden');
        closeMenu?.classList.add('hidden');

        navbar?.setAttribute('hidden', '');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        const isVisible = navbar?.hasAttribute('hidden');
        const toggleBtnIsVisible = toggleBtn?.hasAttribute('hidden');

        if (!toggleBtnIsVisible) {
            toggleBtn?.setAttribute('hidden', '');
        }

        if (isVisible) {
            navbar.removeAttribute('hidden');
        }
    }

    if (window.innerWidth < 768) {
        const isVisible = toggleBtn?.hasAttribute('hidden');
        navbar?.setAttribute('hidden', '');
        openMenu.classList.remove('hidden');
        closeMenu.classList.add('hidden');

        if (isVisible) {
            toggleBtn.removeAttribute('hidden');
        }
    }
})