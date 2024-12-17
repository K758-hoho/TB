/*Character Cards*/
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => {
        const profileImage = card.getAttribute('data-profile');
        const modal = document.getElementById('profile-popup');
        const modalImg = modal.querySelector('.profile-document');
        modalImg.src = profileImage;
        modal.style.display = 'block';
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('profile-popup');
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            // Close if clicking outside the image
            if (!e.target.closest('.profile-document')) {
                modal.style.display = 'none';
            }
        });
    }
});

window.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.getElementById('profile-popup');
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});


