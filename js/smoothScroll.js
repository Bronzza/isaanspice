class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                const headerOffset = 80; // Height of fixed header
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // If mobile menu is open, close it
                const mobileMenu = document.querySelector('.header__nav');
                if (mobileMenu.classList.contains('header__nav--active')) {
                    document.querySelector('.header__burger').click();
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SmoothScroll();
}); 