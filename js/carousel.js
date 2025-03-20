class Carousel {
    constructor(element) {
        this.carousel = element;
        this.slides = [
            'images/about/about-1.jpg',
            'images/about/about-2.jpg',
            'images/about/about-3.jpg'
        ];
        this.currentSlide = 0;
        this.slideImage = this.carousel.querySelector('.about__slide');
        this.dots = this.carousel.querySelectorAll('.about__dot');
        this.isTransitioning = false;
        
        this.initCarousel();
    }
    
    initCarousel() {
        // Preload images
        this.slides.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!this.isTransitioning && this.currentSlide !== index) {
                    this.goToSlide(index);
                }
            });
        });
        
        // Auto advance slides
        setInterval(() => this.nextSlide(), 5000);
    }
    
    goToSlide(index) {
        if (this.isTransitioning) return;
        this.isTransitioning = true;

        // Create new image element
        const newImage = new Image();
        newImage.src = this.slides[index];
        newImage.className = 'about__slide about__slide--next';
        
        // Add new image
        this.carousel.appendChild(newImage);

        // Trigger transition
        setTimeout(() => {
            newImage.classList.add('about__slide--active');
            this.slideImage.classList.add('about__slide--fade');
        }, 50);

        // After transition
        setTimeout(() => {
            this.slideImage.remove();
            newImage.classList.remove('about__slide--next', 'about__slide--active');
            this.slideImage = newImage;
            this.currentSlide = index;
            this.updateDots();
            this.isTransitioning = false;
        }, 500);
    }
    
    updateDots() {
        this.dots.forEach(dot => dot.classList.remove('about__dot--active'));
        this.dots[this.currentSlide].classList.add('about__dot--active');
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('.about__carousel');
    if (carouselElement) {
        new Carousel(carouselElement);
    }
}); 