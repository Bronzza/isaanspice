const menuItems = [
    {
        id: 1,
        title: 'Som Tam Thai',
        description: 'Spicy green papaya salad with peanuts and dried shrimp',
        price: 12.99,
        image: 'images/menu/som-tam.jpg',
        alt: 'Fresh green papaya salad with peanuts and dried shrimp'
    },
    {
        id: 2,
        title: 'Laab Moo',
        description: 'Spicy minced pork salad with herbs and roasted rice powder',
        price: 14.99,
        image: 'images/menu/laab-moo.jpg',
        alt: 'Spicy minced pork salad with fresh herbs'
    },
    // Add more menu items...
];

function renderMenuItems() {
    const menuGrid = document.querySelector('.menu__grid');
    
    menuItems.slice(0, 9).forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu__item';
        
        menuItem.innerHTML = `
            <img src="${item.image}" 
                alt="${item.alt}" 
                loading="lazy" 
                class="menu__image">
            <div class="menu__content">
                <h3 class="menu__title">${item.title}</h3>
                <p class="menu__description">${item.description}</p>
                <span class="menu__price">$${item.price.toFixed(2)}</span>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);

        const img = menuItem.querySelector('img');
        img.classList.add('menu__image--loading');
        img.onload = () => img.classList.remove('menu__image--loading');

        img.onerror = function() {
            this.src = 'images/placeholder.jpg';
            this.alt = 'Image not available';
        };
    });
}

document.addEventListener('DOMContentLoaded', renderMenuItems); 
