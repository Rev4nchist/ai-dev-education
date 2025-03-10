/**
 * Scroll Animation Utility
 * Adds animation classes to elements as they enter the viewport
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in'
    );
    
    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add 'visible' class when element enters viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // trigger slightly before element enters viewport
    });
    
    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Apply animations to elements already in viewport on page load
    setTimeout(() => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                element.classList.add('visible');
                observer.unobserve(element);
            }
        });
    }, 100);
});

/**
 * Apply scroll animation classes to elements
 * Call this function to add animation classes to elements after dynamic content is loaded
 * @param {string} selector - CSS selector for elements to animate
 * @param {string} animationType - Animation type (fade-in, fade-in-left, fade-in-right, scale-in)
 * @param {number} delay - Base delay in milliseconds
 * @param {number} staggerDelay - Delay between each element in milliseconds
 */
function applyScrollAnimations(selector, animationType = 'fade-in', delay = 0, staggerDelay = 100) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
        // Add animation class
        element.classList.add(`scroll-${animationType}`);
        
        // Add delay class if needed
        if (delay > 0 || staggerDelay > 0) {
            const totalDelay = delay + (index * staggerDelay);
            const delayClass = `delay-${Math.floor(totalDelay / 100) * 100}`;
            element.classList.add(delayClass);
        }
        
        // Re-observe the element
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        observer.observe(element);
    });
} 