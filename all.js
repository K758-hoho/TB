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

/*Hall of Tribute Gallery*/
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      const fullImg = img.getAttribute('data-full-img');
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const lightboxCaption = document.getElementById('lightbox-caption');
      
      lightboxImg.src = fullImg;
      lightboxCaption.textContent = img.nextElementSibling.textContent;
      lightbox.style.display = 'block';
    });
  });
  
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (!e.target.closest('#lightbox-img') && !e.target.classList.contains('close')) {
        lightbox.style.display = 'none';
      }
    });
  }
});

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


/*Drugs Database*/
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("drugSearchInput");
    const effectFilter = document.getElementById("effectFilter");
    const ingredientFilter = document.getElementById("ingredientFilter");
    const drugCards = document.querySelectorAll(".drug-card");

    // Only proceed if all required elements are found
    if (searchInput && effectFilter && ingredientFilter) {
        function filterDrugs() {
            const searchTerm = searchInput.value.toLowerCase();
            const effectValue = effectFilter.value;
            const ingredientValue = ingredientFilter.value;

            drugCards.forEach(card => {
                const title = card.querySelector("h2").textContent.toLowerCase();
                const effects = card.dataset.effects.split(",");
                const ingredients = card.dataset.ingredients.split(",");

                const matchesSearch = title.includes(searchTerm);
                const matchesEffect = !effectValue || effects.includes(effectValue);
                const matchesIngredient = !ingredientValue || ingredients.includes(ingredientValue);

                card.style.display = (matchesSearch && matchesEffect && matchesIngredient) ? "block" : "none";
            });
        }

        searchInput.addEventListener("input", filterDrugs);
        effectFilter.addEventListener("change", filterDrugs);
        ingredientFilter.addEventListener("change", filterDrugs);
    }
});
