const fullMenuItems = [
    // Appetizers
    {
        id: 1,
        title: 'Som Tam Thai',
        description: 'Spicy green papaya salad with peanuts and dried shrimp',
        price: 12.99,
        image: 'images/menu/som-tam.jpg',
        category: 'Appetizers'
    },
    {
        id: 2,
        title: 'Laab Moo',
        description: 'Spicy minced pork salad with herbs and roasted rice powder',
        price: 14.99,
        image: 'images/menu/laab-moo.jpg',
        category: 'Appetizers'
    },
    {
        id: 3,
        title: 'Nam Tok',
        description: 'Grilled beef salad with roasted rice powder and fresh herbs',
        price: 15.99,
        image: 'images/menu/nam-tok.jpg',
        category: 'Appetizers'
    },
    // Main Courses
    {
        id: 4,
        title: 'Gai Yang',
        description: 'Grilled marinated chicken with sweet chili sauce',
        price: 18.99,
        image: 'images/menu/gai-yang.jpg',
        category: 'Main Courses'
    },
    {
        id: 5,
        title: 'Tom Saep',
        description: 'Spicy and sour pork rib soup with herbs',
        price: 16.99,
        image: 'images/menu/tom-saep.jpg',
        category: 'Main Courses'
    },
    {
        id: 6,
        title: 'Pad Kra Pao',
        description: 'Stir-fried holy basil with minced pork and fried egg',
        price: 17.99,
        image: 'images/menu/pad-kra-pao.jpg',
        category: 'Main Courses'
    },
    // Desserts
    {
        id: 7,
        title: 'Mango Sticky Rice',
        description: 'Sweet sticky rice with fresh mango and coconut cream',
        price: 9.99,
        image: 'images/menu/mango-sticky-rice.jpg',
        category: 'Desserts'
    },
    {
        id: 8,
        title: 'Tub Tim Grob',
        description: 'Water chestnut rubies in coconut milk',
        price: 8.99,
        image: 'images/menu/tub-tim-grob.jpg',
        category: 'Desserts'
    },
    // Beverages
    {
        id: 9,
        title: 'Thai Iced Tea',
        description: 'Traditional Thai tea with cream',
        price: 4.99,
        image: 'images/menu/thai-tea.jpg',
        category: 'Beverages'
    },
    {
        id: 10,
        title: 'Lemongrass Drink',
        description: 'Refreshing iced lemongrass drink',
        price: 4.99,
        image: 'images/menu/lemongrass-drink.jpg',
        category: 'Beverages'
    }
];

class FullMenu {
    constructor() {
        this.menuGrid = document.querySelector('.full-menu__grid');
        this.categoryButtons = document.querySelectorAll('.full-menu__category');
        this.currentCategory = 'All';
        
        this.initializeMenu();
    }

    initializeMenu() {
        this.categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.setActiveCategory(button);
                this.filterMenu(button.textContent);
            });
        });

        this.renderMenu(fullMenuItems);
    }

    setActiveCategory(activeButton) {
        this.categoryButtons.forEach(button => {
            button.classList.remove('full-menu__category--active');
        });
        activeButton.classList.add('full-menu__category--active');
    }

    filterMenu(category) {
        const filteredItems = category === 'All' 
            ? fullMenuItems 
            : fullMenuItems.filter(item => item.category === category);
        
        this.renderMenu(filteredItems);
    }

    renderMenu(items) {
        this.menuGrid.innerHTML = '';
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu__item';
            
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="menu__image">
                <div class="menu__content">
                    <h3 class="menu__title">${item.title}</h3>
                    <p class="menu__description">${item.description}</p>
                    <span class="menu__price">$${item.price.toFixed(2)}</span>
                </div>
            `;
            
            this.menuGrid.appendChild(menuItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FullMenu();
}); 