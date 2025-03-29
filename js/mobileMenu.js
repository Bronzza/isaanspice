class MobileMenu {
    constructor() {
        this.burger = document.querySelector('.header__burger');
        this.links = document.querySelectorAll('.header__link');
        this.init();
    }

    init() {
        if (!this.burger || !this.links.length) {
            console.warn('Mobile menu elements not found');
            return;
        }

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
        document.body.classList.toggle('menu-open');
    }

    closeMenu() {
        document.body.classList.remove('menu-open');
    }
}

// Remove automatic initialization
// The menu will be initialized after header component is loaded 