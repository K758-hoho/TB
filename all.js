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


/*Current Comic Progress*/
document.addEventListener('DOMContentLoaded', function() {
    var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1alCVHZ40GNE7H7d_o-LnPShoQs40sZRDgxG-7u_ZAMQ/gviz/tq?tqx=out:csv&sheet=Database';

    function init() {
        Papa.parse(public_spreadsheet_url, {
            download: true,
            header: true,
            complete: showInfo
        });
    }

    function showInfo(results) {
        var data = results.data;
        // Wait for elements to be available
        const progress = document.querySelector('#progress');
        const percentageText = document.querySelector('#percentageText');
        const stage = document.querySelector('#stage');
        const currentChapter = document.querySelector('#currentChapter');

        // Check if elements exist before proceeding
        if (progress && percentageText && stage && currentChapter) {
            data.forEach(function(data) {
                progress.style.width = data.Progress;
                percentageText.innerHTML = data.Progress;
                stage.innerHTML = data.CurrentStage;
                currentChapter.innerHTML = data.CurrentChapter;
                stage.style.opacity = 1;
                currentChapter.style.opacity = 1;
            });
        }
    }

    init();
});