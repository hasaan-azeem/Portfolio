function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now(); // Record the start time
    const easeOutQuad = (t) => t * (2 - t); // Easing function for a natural animation

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime; // Calculate elapsed time
        const progress = Math.min(elapsedTime / duration, 1); // Normalize progress (0 to 1)
        const easedProgress = easeOutQuad(progress); // Apply easing

        const currentValue = Math.ceil(start + (target - start) * easedProgress);
        element.textContent = currentValue.toLocaleString(); // Update the text content

        if (progress < 1) {
            requestAnimationFrame(updateCounter); // Continue animation until progress is 1
        } else {
            element.textContent = target.toLocaleString(); // Ensure the final value is precise
        }
    }

    requestAnimationFrame(updateCounter); // Start the animation
}

// Using IntersectionObserver to trigger the animation on scroll
const counters = document.querySelectorAll('.count');
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                animateCounter(entry.target, target);
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
);

counters.forEach((counter) => observer.observe(counter));
