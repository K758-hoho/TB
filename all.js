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

/*Comic Reading Progress*/
window.onload = function() {
    let progressBar = document.querySelector('.progress-bar');
    let comicTitleBox = document.querySelector('#comic-title-box');

    if (progressBar && comicTitleBox) {
        window.addEventListener('scroll', () => {
            let titleBoxRect = comicTitleBox.getBoundingClientRect();
            let windowHeight = window.innerHeight;
            let progress = 0;

            if (titleBoxRect.top <= 0) {
                let visibleHeight = Math.min(titleBoxRect.bottom, windowHeight);
            }

            progress = Math.min(Math.max(progress, 0), 100);
            progressBar.style.width = progress + '%';
        });
    }
};
