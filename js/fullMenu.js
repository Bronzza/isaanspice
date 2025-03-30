const fullMenuItems = [
    {
        "id": 1,
        "title": "Spring Roll",
        "description": "Crispy fried spring rolls filled with vegetables and served with sweet chili sauce.",
        "price": "80",
        "image": "images/menu/spring-roll.jpg",
        "category": "Starters"
    },
    {
        "id": 2,
        "title": "Chicken Satay",
        "description": "Grilled marinated chicken skewers served with peanut sauce.",
        "price": "100",
        "image": "images/menu/chicken-satay.jpg",
        "category": "Starters"
    },
    {
        "id": 3,
        "title": "Crispy Fried Shrimps",
        "description": "Golden crispy battered shrimp served with dipping sauce.",
        "price": "120",
        "image": "images/menu/crispy-fried-shrimps.jpg",
        "category": "Starters"
    },
    {
        "id": 4,
        "title": "Crispy Fried Calamari",
        "description": "Deep-fried calamari rings with a crunchy coating, served with sauce.",
        "price": "120",
        "image": "images/menu/crispy-fried-calamari.jpg",
        "category": "Starters"
    },
    {
        "id": 5,
        "title": "Chicken Nuggets",
        "description": "Crunchy bite-sized chicken pieces, perfect for snacking.",
        "price": "80",
        "image": "images/menu/chicken-nuggets.jpg",
        "category": "Starters"
    },
    {
        "id": 6,
        "title": "French Fries",
        "description": "Crispy golden fries, lightly salted, served with ketchup.",
        "price": "80",
        "image": "images/menu/french-fries.jpg",
        "category": "Starters"
    },
    {
        "id": 7,
        "title": "Fish Cake",
        "description": "Thai-style fish cakes made with fragrant herbs and spices.",
        "price": "80",
        "image": "images/menu/fish-cake.jpg",
        "category": "Starters"
    },
    {
        "id": 8,
        "title": "Shrimp Cake",
        "description": "Delicious shrimp cakes with a crispy coating, served with sauce.",
        "price": "120",
        "image": "images/menu/shrimp-cake.jpg",
        "category": "Starters"
    },
    {
        "id": 9,
        "title": "Mixed Vegetables Tempura",
        "description": "Assorted fresh vegetables deep-fried in a light tempura batter.",
        "price": "100",
        "image": "images/menu/mixed-vegetables-tempura.jpg",
        "category": "Starters"
    },
    {
        "id": 10,
        "title": "Fish and Chips",
        "description": "Crispy battered fish fillets served with fries and tartar sauce.",
        "price": "150",
        "image": "images/menu/fish-and-chips.jpg",
        "category": "Starters"
    },
    {
        "id": 11,
        "title": "Crispy Chicken and Chips",
        "description": "Crispy fried chicken served with golden fries.",
        "price": "150",
        "image": "images/menu/crispy-chicken-and-chips.jpg",
        "category": "Starters"
    },
    {
        "id": 12,
        "title": "Hot Basil Leaf",
        "description": "Stir-fried meat with hot basil leaves and chili.",
        "price": "90-120",
        "image": "images/menu/hot-basil-leaf.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 13,
        "title": "Mixed Vegetables in Oyster Sauce",
        "description": "Stir-fried mixed vegetables in savory oyster sauce.",
        "price": "90",
        "image": "images/menu/mixed-vegetables-oyster-sauce.jpg",
        "category": "Vegetarian & Vegan"
    },
    {
        "id": 14,
        "title": "Thai Omelette",
        "description": "Fluffy Thai-style omelette served with rice.",
        "price": "60",
        "image": "images/menu/thai-omelette.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 15,
        "title": "Morning Glory",
        "description": "Stir-fried morning glory with garlic and soy sauce.",
        "price": "80",
        "image": "images/menu/morning-glory.jpg",
        "category": "Vegetarian & Vegan"
    },
    {
        "id": 16,
        "title": "Sweet Sauce Stir Fry",
        "description": "Sweet and sour stir-fried vegetables with meat of choice.",
        "price": "90-120",
        "image": "images/menu/sweet-sauce-stir-fry.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 17,
        "title": "Stir Fried Cashewnut",
        "description": "Stir-fried meat with cashew nuts and bell peppers.",
        "price": "90-120",
        "image": "images/menu/stir-fried-cashewnut.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 18,
        "title": "Stir Fried Pad Phik Curry",
        "description": "Spicy stir-fried curry with meat and vegetables.",
        "price": "90-100",
        "image": "images/menu/stir-fried-pad-phik-curry.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 19,
        "title": "Thai Green Curry",
        "description": "A fragrant green curry with chicken, bamboo shoots, and Thai basil.",
        "price": "130",
        "image": "images/menu/thai-green-curry.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 20,
        "title": "Thai Red Curry",
        "description": "A rich and spicy red curry with coconut milk, chicken, and vegetables.",
        "price": "130",
        "image": "images/menu/thai-red-curry.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 21,
        "title": "Massaman Curry",
        "description": "A mild and creamy curry with tender beef, potatoes, and peanuts.",
        "price": "140",
        "image": "images/menu/massaman-curry.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 22,
        "title": "Panang Curry",
        "description": "A thick and creamy curry with beef or chicken, flavored with kaffir lime leaves.",
        "price": "140",
        "image": "images/menu/panang-curry.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 23,
        "title": "Grilled Chicken Satay",
        "description": "Marinated and grilled chicken skewers, served with peanut sauce.",
        "price": "120",
        "image": "images/menu/grilled-chicken-satay.jpg",
        "category": "BBQ & Grills"
    },
    {
        "id": 24,
        "title": "BBQ Pork Ribs",
        "description": "Tender pork ribs slow-cooked and glazed with a rich BBQ sauce.",
        "price": "180",
        "image": "images/menu/bbq-pork-ribs.jpg",
        "category": "BBQ & Grills"
    },
    {
        "id": 25,
        "title": "Grilled Jumbo Prawns",
        "description": "Fresh jumbo prawns grilled to perfection, served with seafood sauce.",
        "price": "200",
        "image": "images/menu/grilled-jumbo-prawns.jpg",
        "category": "Seafood"
    },
    {
        "id": 26,
        "title": "Steamed Fish with Lime",
        "description": "Whole fish steamed with lime, garlic, and chili for a tangy and spicy flavor.",
        "price": "220",
        "image": "images/menu/steamed-fish-lime.jpg",
        "category": "Seafood"
    },
    {
        "id": 27,
        "title": "Deep-Fried Sea Bass",
        "description": "Crispy fried sea bass served with a special Thai sauce.",
        "price": "250",
        "image": "images/menu/deep-fried-sea-bass.jpg",
        "category": "Seafood"
    },
    {
        "id": 28,
        "title": "Vegetable Stir-Fry",
        "description": "A mix of fresh vegetables stir-fried in a light soy sauce.",
        "price": "100",
        "image": "images/menu/vegetable-stir-fry.jpg",
        "category": "Vegetarian & Vegan"
    },
    {
        "id": 29,
        "title": "Tofu with Cashew Nuts",
        "description": "Crispy tofu stir-fried with cashew nuts and bell peppers in a savory sauce.",
        "price": "110",
        "image": "images/menu/tofu-cashew-nuts.jpg",
        "category": "Vegetarian & Vegan"
    },
    {
        "id": 30,
        "title": "Mango Sticky Rice",
        "description": "Sweet sticky rice with ripe mango and coconut milk.",
        "price": "90",
        "image": "images/menu/mango-sticky-rice.jpg",
        "category": "Desserts & Drinks"
    },
    {
        "id": 31,
        "title": "Coconut Ice Cream",
        "description": "Homemade coconut ice cream topped with roasted peanuts.",
        "price": "80",
        "image": "images/menu/coconut-ice-cream.jpg",
        "category": "Desserts & Drinks"
    },
    {
        "id": 32,
        "title": "Thai Iced Tea",
        "description": "Sweet Thai tea served with condensed milk and ice.",
        "price": "60",
        "image": "images/menu/thai-iced-tea.jpg",
        "category": "Desserts & Drinks"
    },
    {
        "id": 33,
        "title": "Fresh Coconut Juice",
        "description": "Chilled fresh coconut juice served in a coconut shell.",
        "price": "70",
        "image": "images/menu/fresh-coconut-juice.jpg",
        "category": "Desserts & Drinks"
    },
    {
        "id": 34,
        "title": "Grilled Beef Skewers",
        "description": "Juicy grilled beef skewers marinated in Thai spices.",
        "price": "150",
        "image": "images/menu/grilled-beef-skewers.jpg",
        "category": "BBQ & Grills"
    },
    {
        "id": 35,
        "title": "Pad Krapow (Thai Basil Beef)",
        "description": "Spicy stir-fried beef with Thai basil and chili, served with rice.",
        "price": "130",
        "image": "images/menu/pad-krapow.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 36,
        "title": "Garlic Prawns",
        "description": "Juicy prawns stir-fried with garlic and butter, served with steamed rice.",
        "price": "180",
        "image": "images/menu/garlic-prawns.jpg",
        "category": "Seafood"
    },
    {
        "id": 37,
        "title": "Vegetable Curry",
        "description": "A mild and creamy coconut curry with mixed vegetables.",
        "price": "120",
        "image": "images/menu/vegetable-curry.jpg",
        "category": "Vegetarian & Vegan"
    },
    {
        "id": 38,
        "title": "Sweet and Sour Chicken",
        "description": "Crispy chicken pieces coated in a tangy sweet and sour sauce.",
        "price": "130",
        "image": "images/menu/sweet-sour-chicken-1.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 39,
        "title": "Fried Rice with Shrimp",
        "description": "Thai-style fried rice with shrimp, eggs, and fresh vegetables.",
        "price": "120",
        "image": "images/menu/fried-rice-shrimp.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 40,
        "title": "Spicy Seafood Soup",
        "description": "A hot and tangy soup with mixed seafood, lemongrass, and chili.",
        "price": "150",
        "image": "images/menu/spicy-seafood-soup.jpg",
        "category": "Seafood"
    },
    {
        "id": 41,
        "title": "Thai Mango Salad",
        "description": "Shredded mango with fresh herbs, peanuts, and a zesty dressing.",
        "price": "100",
        "image": "images/menu/thai-mango-salad.jpg",
        "category": "Starters"
    },
    {
        "id": 42,
        "title": "Crispy Duck with Tamarind Sauce",
        "description": "Crispy duck topped with a rich tamarind sauce, served with steamed rice.",
        "price": "200",
        "image": "images/menu/crispy-duck-tamarind.jpg",
        "category": "Main Dishes"
    },
    {
        "id": 43,
        "title": "Larb Gai (Spicy Minced Chicken Salad)",
        "description": "Minced chicken mixed with Thai spices, herbs, and lime dressing.",
        "price": "120",
        "image": "images/menu/larb-gai.jpg",
        "category": "Starters"
    },
    {
        "id": 44,
        "title": "Crispy Tofu",
        "description": "Deep-fried tofu with a crispy exterior, served with sweet chili sauce.",
        "price": "90",
        "image": "images/menu/crispy-tofu.jpg",
        "category": "Vegetarian & Vegan"
    },
    {
        "id": 45,
        "title": "Pumpkin Soup",
        "description": "Creamy pumpkin soup with a hint of coconut milk.",
        "price": "100",
        "image": "images/menu/pumpkin-soup.jpg",
        "category": "Vegetarian & Vegan"
    },
    {
        "id": 46,
        "title": "BBQ Beef Skewers",
        "description": "Grilled beef skewers with Thai-style marinade.",
        "price": "150",
        "image": "images/menu/bbq-beef-skewers.jpg",
        "category": "BBQ & Grills"
    },
    {
        "id": 47,
        "title": "Grilled Lobster",
        "description": "Fresh lobster grilled with garlic butter and herbs.",
        "price": "350",
        "image": "images/menu/grilled-lobster.jpg",
        "category": "Seafood"
    },
    {
        "id": 48,
        "title": "Passion Fruit Juice",
        "description": "Freshly squeezed passion fruit juice served chilled.",
        "price": "60",
        "image": "images/menu/passion-fruit-juice.jpg",
        "category": "Desserts & Drinks"
    },
    {
        "id": 49,
        "title": "Lychee Smoothie",
        "description": "Refreshing lychee smoothie with crushed ice.",
        "price": "70",
        "image": "images/menu/lychee-smoothie.jpg",
        "category": "Desserts & Drinks"
    },
    {
        "id": 50,
        "title": "Black Sticky Rice Pudding",
        "description": "Sweet black sticky rice served with coconut milk.",
        "price": "90",
        "image": "images/menu/black-sticky-rice.jpg",
        "category": "Desserts & Drinks"
    },
    {
        "id": 51,
        "title": "Thai Milk Tea",
        "description": "Traditional Thai milk tea served iced.",
        "price": "50",
        "image": "images/menu/thai-milk-tea.jpg",
        "category": "Desserts & Drinks"
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