class TestimonialsCarousel {
    constructor() {
        this.testimonials = [
            {
                text: "The most authentic Issaan food I've had outside of Thailand. The som tam is perfectly spiced!",
                author: "John D.",
                avatar: "images/avatars/avatar-1.jpg"
            },
            {
                text: "Their Gai Yang is absolutely fantastic! The perfect balance of flavors and the chicken is always perfectly cooked.",
                author: "Sarah M.",
                avatar: "images/avatars/avatar-2.jpg"
            },
            {
                text: "Finally found authentic Issaan cuisine in the city! The Tom Saep brings me right back to Thailand.",
                author: "Mike R.",
                avatar: "images/avatars/avatar-3.jpg"
            },
            {
                text: "The service is exceptional and the food is consistently delicious. A must-visit for Thai food lovers!",
                author: "Emma L.",
                avatar: "images/avatars/avatar-4.jpg"
            },
            {
                text: "The Pad Kra Pao is my favorite dish here. The perfect level of spice and the holy basil is always fresh.",
                author: "David K.",
                avatar: "images/avatars/avatar-5.jpg"
            },
            {
                text: "Authentic flavors and generous portions. The mango sticky rice is the perfect ending to any meal.",
                author: "Lisa P.",
                avatar: "images/avatars/avatar-6.jpg"
            }
        ];

        this.currentIndex = 0;
        this.itemsPerView = window.innerWidth >= 768 ? 3 : 1;
        this.init();
    }

    init() {
        this.renderTestimonials();
        this.setupEventListeners();
        this.updateArrows();
    }

    renderTestimonials() {
        const grid = document.querySelector('.testimonials__grid');
        grid.innerHTML = '';

        for (let i = 0; i < this.itemsPerView; i++) {
            const index = (this.currentIndex + i) % this.testimonials.length;
            const testimonial = this.testimonials[index];
            
            const item = document.createElement('div');
            item.className = 'testimonials__item';
            item.innerHTML = `
                <p class="testimonials__text">${testimonial.text}</p>
                <div class="testimonials__author">
                    <img src="${testimonial.avatar}" alt="${testimonial.author}" class="testimonials__avatar">
                    <span class="testimonials__name">${testimonial.author}</span>
                </div>
            `;
            
            grid.appendChild(item);
            setTimeout(() => item.classList.add('testimonials__item--active'), 50);
        }
    }

    setupEventListeners() {
        const prevBtn = document.querySelector('.testimonials__arrow--prev');
        const nextBtn = document.querySelector('.testimonials__arrow--next');

        prevBtn.addEventListener('click', () => this.navigate('prev'));
        nextBtn.addEventListener('click', () => this.navigate('next'));

        window.addEventListener('resize', () => {
            this.itemsPerView = window.innerWidth >= 768 ? 3 : 1;
            this.renderTestimonials();
            this.updateArrows();
        });
    }

    navigate(direction) {
        const items = document.querySelectorAll('.testimonials__item');
        items.forEach(item => item.classList.remove('testimonials__item--active'));

        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + this.itemsPerView) % this.testimonials.length;
        } else {
            this.currentIndex = (this.currentIndex - this.itemsPerView + this.testimonials.length) % this.testimonials.length;
        }

        this.renderTestimonials();
        this.updateArrows();
    }

    updateArrows() {
        const prevBtn = document.querySelector('.testimonials__arrow--prev');
        const nextBtn = document.querySelector('.testimonials__arrow--next');

        if (window.innerWidth < 768) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TestimonialsCarousel();
}); 