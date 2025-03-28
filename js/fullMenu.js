const fullMenuItems = [
    // Appetizers
    {
        "id": 1,
        "title": "Spring Roll",
        "description": "Crispy fried spring rolls filled with vegetables and served with sweet chili sauce.",
        "price": 80,
        "image": "images/menu/spring-roll.jpg",
        "category": "Appetizers"
    },
    {
        "id": 2,
        "title": "Chicken Satay",
        "description": "Grilled marinated chicken skewers served with peanut sauce.",
        "price": 100,
        "image": "images/menu/chicken-satay.jpg",
        "category": "Appetizers"
    },
    {
        "id": 3,
        "title": "Crispy Fried Shrimps",
        "description": "Golden crispy battered shrimp served with dipping sauce.",
        "price": 120,
        "image": "images/menu/crispy-fried-shrimps.jpg",
        "category": "Appetizers"
    },
    {
        "id": 4,
        "title": "Crispy Fried Calamari",
        "description": "Deep-fried calamari rings with a crunchy coating, served with sauce.",
        "price": 120,
        "image": "images/menu/crispy-fried-calamari.jpg",
        "category": "Appetizers"
    },
    {
        "id": 5,
        "title": "Chicken Nuggets",
        "description": "Crunchy bite-sized chicken pieces, perfect for snacking.",
        "price": 80,
        "image": "images/menu/chicken-nuggets.jpg",
        "category": "Appetizers"
    },
    {
        "id": 6,
        "title": "French Fries",
        "description": "Crispy golden fries, lightly salted, served with ketchup.",
        "price": 80,
        "image": "images/menu/french-fries.jpg",
        "category": "Appetizers"
    },
    {
        "id": 7,
        "title": "Fish Cake",
        "description": "Thai-style fish cakes made with fragrant herbs and spices.",
        "price": 80,
        "image": "images/menu/fish-cake.jpg",
        "category": "Appetizers"
    },
    {
        "id": 8,
        "title": "Shrimp Cake",
        "description": "Delicious shrimp cakes with a crispy coating, served with sauce.",
        "price": 120,
        "image": "images/menu/shrimp-cake.jpg",
        "category": "Appetizers"
    },
    {
        "id": 9,
        "title": "Mixed Vegetables Tempura",
        "description": "Assorted fresh vegetables deep-fried in a light tempura batter.",
        "price": 100,
        "image": "images/menu/mixed-vegetables-tempura.jpg",
        "category": "Appetizers"
    },
    {
        "id": 10,
        "title": "Fish and Chips",
        "description": "Crispy battered fish fillet served with golden fries.",
        "price": 150,
        "image": "images/menu/fish-and-chips.jpg",
        "category": "Appetizers"
    },
    {
        "id": 11,
        "title": "Crispy Chicken and Chips",
        "description": "Deep-fried crispy chicken with a side of golden fries.",
        "price": 150,
        "image": "images/menu/crispy-chicken-and-chips.jpg",
        "category": "Appetizers"
    },
    {
        "id": 12,
        "title": "Hot Basil Leaf",
        "description": "Stir-fried basil leaves with your choice of protein, served with rice.",
        "price": "90-120",
        "image": "images/menu/hot-basil-leaf.jpg",
        "category": "Thaifood"
    },
    {
        "id": 13,
        "title": "Mixed Vegetables in Oyster Sauce",
        "description": "Stir-fried mixed vegetables in a savory oyster sauce.",
        "price": 90,
        "image": "images/menu/mixed-vegetables-oyster.jpg",
        "category": "Thaifood"
    },
    {
        "id": 14,
        "title": "Thai Omelette",
        "description": "Fluffy Thai-style omelette, crispy on the edges, served with rice.",
        "price": 60,
        "image": "images/menu/thai-omelette.jpg",
        "category": "Thaifood"
    },
    {
        "id": 15,
        "title": "Morning Glory",
        "description": "Traditional Thai stir-fried morning glory with garlic and chili.",
        "price": 80,
        "image": "images/menu/morning-glory.jpg",
        "category": "Thaifood"
    },
    {
        "id": 16,
        "title": "Sweet Sauce Stir Fry",
        "description": "Stir-fried vegetables and meat in a delicious sweet sauce.",
        "price": "90-120",
        "image": "images/menu/sweet-sauce-stir-fry.jpg",
        "category": "Thaifood"
    },
    {
        "id": 17,
        "title": "Stir Fried Cashewnut",
        "description": "Stir-fried chicken with crunchy cashew nuts and vegetables.",
        "price": "90-120",
        "image": "images/menu/stir-fried-cashewnut.jpg",
        "category": "Thaifood"
    },
    {
        "id": 18,
        "title": "Stir Fried Pad Phik Curry",
        "description": "Spicy stir-fried dish with curry paste and fresh vegetables.",
        "price": "90-100",
        "image": "images/menu/stir-fried-pad-phik-curry.jpg",
        "category": "Thaifood"
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
                    <span class="menu__price">$${item.price}</span>
                </div>
            `;
            
            this.menuGrid.appendChild(menuItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FullMenu();
}); 