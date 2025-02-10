//Fullscreen button
document.addEventListener('DOMContentLoaded', () => {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const exitFullscreenBtn = document.getElementById('exit-fullscreen-btn');
    const comicContainer = document.getElementById('comic-container');

    fullscreenBtn.addEventListener('click', () => {
        comicContainer.classList.add('fullscreen');
        fullscreenBtn.classList.add('hidden');
        exitFullscreenBtn.classList.remove('hidden');
    });

    exitFullscreenBtn.addEventListener('click', () => {
        comicContainer.classList.remove('fullscreen');
        fullscreenBtn.classList.remove('hidden');
        exitFullscreenBtn.classList.add('hidden');
    });
});

//Comic-secton Navbar BG Change
document.addEventListener('DOMContentLoaded', (event) => {
  const topnav = document.querySelector('.topnav');
  const comicSection = document.querySelector('#comic-section');

  window.addEventListener('scroll', () => {
    const sectionTop = comicSection.offsetTop;
    const sectionHeight = comicSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
      topnav.classList.add('black-bg');
    } else {
      topnav.classList.remove('black-bg');
    }
  });
});

//Mobile Navigation buttons
function toggleComicNavButtons() {
    var nav = document.getElementById('comic-navigation');
    var button = document.getElementById('toggle-button');
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        button.classList.remove('rotated');
    } else {
        nav.classList.add('open');
        button.classList.add('rotated');
    }
}

/*Share Button*/
function toggleShare() {
    const shareOptions = document.getElementById('shareOptions');
    shareOptions.style.display = shareOptions.style.display === 'block' ? 'none' : 'block';
}

function shareOnWhatsApp() {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareOnTelegram() {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareOnLine() {
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareOnFacebook() {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareOnTwitter() {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank');
}
function shareOnBluesky() {
    window.open(`https://bsky.app/intent/compose?text=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareOnMastodon() {
    window.open(`https://toot.kytta.dev/?text=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareOnTumblr() {
    window.open(`https://www.tumblr.com/share/link?url=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareOnPinterest() {
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareOnReddit() {
    window.open(`https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}`, '_blank');
}


function copyPermalink() {
    const permalinkText = document.getElementById('permalink-text').textContent;
    navigator.clipboard.writeText(permalinkText).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyBtn.classList.remove('copied');
        }, 2000);
    });
}

/*Comic Reading Progress*/
window.onload = function() {
    let progressBar = document.querySelector('.progress-bar');
    let comicTitleBox = document.querySelector('#comic-title-box');
    
    if (progressBar && comicTitleBox) {
        window.addEventListener('scroll', () => {
            let titleBoxRect = comicTitleBox.getBoundingClientRect();
            let totalHeight = comicTitleBox.offsetHeight;
            let windowHeight = window.innerHeight;
            
            // Calculate how much of the comic has been scrolled
            let scrolled = -titleBoxRect.top;
            let scrollableDistance = totalHeight - windowHeight;
            
            // Calculate progress percentage
            let progress = (scrolled / scrollableDistance) * 100;
            
            // Ensure progress stays between 0 and 100
            progress = Math.min(Math.max(progress, 0), 100);
            
            // Update progress bar width
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
