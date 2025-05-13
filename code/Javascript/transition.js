document.addEventListener('DOMContentLoaded', () => {
    const transitionOverlay = document.getElementById('page-transition');
    const links = document.querySelectorAll('a'); // Target all links

    links.forEach(link => {
        link.addEventListener('click', e => {
            const target = link.getAttribute('href');

            // Check if the link is internal (starts with a filename or path, not "#")
            if (target && !target.startsWith('#') && !link.hasAttribute('download')) {
                e.preventDefault(); // Prevent immediate navigation

                // Trigger fade-out for page content
                document.body.classList.add('fade-out');

                // Show the overlay and animation
                transitionOverlay.classList.add('active');

                // Wait for the animation to complete, then navigate
                setTimeout(() => {
                    window.location.href = target;
                }, 800); // Match animation duration
            }
        });
    });

    // Ensure the overlay is removed on page load
    window.addEventListener('load', () => {
        document.body.classList.remove('fade-out');
        transitionOverlay.classList.remove('active');
    });
});
