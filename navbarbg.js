document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('myTopnav');
    const heroSection = document.querySelector('.hero-section');
    
    // For pages without hero section
    if (!heroSection) {
        nav.style.backgroundColor = '#300000';
        return;
    }
    
    // For homepage with hero section
    function updateNavBackground() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroBottom) {
            nav.style.backgroundColor = '#300000';
        } else {
            nav.style.backgroundColor = '#550000';
        }
    }
    
    // Initial check
    updateNavBackground();
    
    // Check on scroll
    window.addEventListener('scroll', updateNavBackground);
});