document.addEventListener('DOMContentLoaded', function () {
    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Fade-in sections
    const fadeSections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -15% 0px'
    });

    fadeSections.forEach(section => {
        observer.observe(section);
    });

    // Active Nav Link Highlight
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelector('nav a.active')?.classList.remove('active');
                document.querySelector(`nav a[href="#${id}"]`)?.classList.add('active');
            }
        });
    }, {
        rootMargin: '-40% 0px -40% 0px'
    });

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // Footer year update
    document.getElementById('year').textContent = new Date().getFullYear();
});
