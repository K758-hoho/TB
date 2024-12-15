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