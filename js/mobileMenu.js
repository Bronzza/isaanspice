class MobileMenu {
    constructor() {
        this.burger = document.querySelector('.header__burger');
        this.nav = document.querySelector('.header__nav');
        this.links = document.querySelectorAll('.header__link');
        this.isOpen = false;

        this.init();
    }

    init() {
        this.burger.addEventListener('click', () => this.toggleMenu());
        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu on window resize (if desktop size)
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.burger.classList.toggle('header__burger--active');
        this.nav.classList.toggle('header__nav--active');
        document.body.style.overflow = this.isOpen ? 'hidden' : '';
    }

    closeMenu() {
        if (this.isOpen) {
            this.isOpen = false;
            this.burger.classList.remove('header__burger--active');
            this.nav.classList.remove('header__nav--active');
            document.body.style.overflow = '';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
}); 