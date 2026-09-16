// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('hero-typing-text');
    const typingRoles = [
        'Junior Full-Stack Developer',
        'Python & Django Developer',
        '.NET Software Engineer',
        'Applied AI/ML Practitioner'
    ];

    if (typingText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let roleIndex = 0;
        let characterIndex = 0;
        let isDeleting = false;

        const typeRole = function() {
            const currentRole = typingRoles[roleIndex];
            
            // Render visible substring
            typingText.textContent = currentRole.substring(0, characterIndex);

            let typingSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && characterIndex === currentRole.length) {
                // Pause at complete word before starting deletion
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && characterIndex === 0) {
                // Pause at empty state before switching to next word
                isDeleting = false;
                roleIndex = (roleIndex + 1) % typingRoles.length;
                typingSpeed = 400;
            } else {
                // Increment or decrement character count
                characterIndex += isDeleting ? -1 : 1;
            }

            window.setTimeout(typeRole, typingSpeed);
        };

        // Initial delay before typing starts
        window.setTimeout(typeRole, 1000);
    }

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
            offset: 100
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Refresh AOS on window scroll
    window.addEventListener('scroll', function() {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    });
});
