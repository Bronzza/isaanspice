// Function to load HTML components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        
        // Update active state based on current page
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll('.header__link');
        
        navLinks.forEach(link => {
            if (currentPage.includes(link.getAttribute('href').replace('/#', ''))) {
                link.classList.add('header__link--active');
            } else {
                link.classList.remove('header__link--active');
            }
        });

        // Initialize mobile menu after header is loaded
        if (elementId === 'header-component' && typeof MobileMenu !== 'undefined') {
            new MobileMenu();
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load header and footer components
    loadComponent('header-component', 'components/header.html');
    loadComponent('footer-component', 'components/footer.html');
}); 