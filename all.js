/*Scrollup Kofi*/
kofiWidgetOverlay.draw('karinkho', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me?',
    'floating-chat.donateButton.background-color': '#22226e',
    'floating-chat.donateButton.text-color': '#fff'
});

let prevScrollPos = window.scrollY;

setTimeout(() => {
    const kofiButton = document.querySelector('[id^="kofi-widget-overlay"]');

    if (kofiButton) {
        kofiButton.style.transition = 'all 0.3s ease-in-out';

        window.addEventListener('scroll', () => {
            const currentScrollPos = window.scrollY;

            if (prevScrollPos > currentScrollPos) {
                kofiButton.style.opacity = '1';
                kofiButton.style.transform = 'translateY(0)';
                kofiButton.style.pointerEvents = 'auto';
            } else {
                kofiButton.style.opacity = '0';
                kofiButton.style.transform = 'translateY(100px)';
                kofiButton.style.pointerEvents = 'none';
            }
            
            prevScrollPos = currentScrollPos;
        });
    }
}, 1000);


/*Responsive Navbar with X*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    var icon = document.getElementById("navIcon");
    
    if (!x.classList.contains("responsive")) {
        x.classList.add("responsive");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        x.classList.remove("responsive");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(e) {
        let searchValue = document.getElementById("searchInput").value;
        if (!searchValue.trim()) {
            e.preventDefault();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(e) {
        let searchValue = document.getElementById("searchInput").value;
        if (!searchValue.trim()) {
            e.preventDefault();
        }
    });
});


/*Topnav BG change*/
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('myTopnav');
    const heroSection = document.querySelector('.hero-section');
    const comicSection = document.getElementById('comic-section'); // Use ID selector for comic-section

    function updateNavBackground() {
        const scrollPosition = window.scrollY;

        // Check if heroSection exists and handle its background color logic
        if (heroSection) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

            if (scrollPosition > heroBottom) {
                nav.style.backgroundColor = '#300000';
            } else {
                nav.style.backgroundColor = '#550000';
            }
        }

        // Check if comicSection exists and handle its background color logic
        if (comicSection) {
            const comicTop = comicSection.offsetTop;
            const comicBottom = comicTop + comicSection.offsetHeight;

            if (scrollPosition >= comicTop && scrollPosition < comicBottom) {
                nav.style.backgroundColor = 'black';
            } else {
                // Ensure it reverts to previous logic when out of comic section
                if (heroSection) {
                    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                    if (scrollPosition > heroBottom) {
                        nav.style.backgroundColor = '#300000';
                    } else {
                        nav.style.backgroundColor = '#550000';
                    }
                } else {
                    nav.style.backgroundColor = '#300000'; // Default color for pages without hero section
                }
            }
        }
    }

    // Initial check
    updateNavBackground();

    // Check on scroll
    window.addEventListener('scroll', updateNavBackground);
});
