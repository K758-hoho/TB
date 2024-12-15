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
