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


/*Responsove Navbar with X*/
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


/*Hero-section BG*/
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


/*Drugs Database*/
document.addEventListener("DOMContentLoaded", function() {
    const effectFilter = document.getElementById("effectFilter");
    const ingredientFilter = document.getElementById("ingredientFilter");
    const searchInput = document.getElementById("drugSearchInput");
    
    if (effectFilter && ingredientFilter && searchInput) {
        effectFilter.innerHTML = ` <option value="">Filter by Effect</option> <option value="restorative">Restorative</option> <option value="enhancement">Enhancement</option> <option value="recreational">Recreational</option> <option value="damage">Damage</option> <option value="utility">Utility</option> `;

        ingredientFilter.innerHTML = ` <option value="">Filter by Base Ingredient</option> <option value="elbrozkaa">Elbrozkaa</option> <option value="puorikkin">Puorikkin</option> <option value="apricate">Apricate</option> <option value="kapsaris">Kapsaris</option> <option value="carmiddel">Carmiddel</option> <option value="eraser mints">Eraser Mints</option> <option value="teulnan">Teulnan</option> <option value="litkus">Litkus</option> <option value="kiépi">Kiépi</option> `;

        searchInput.addEventListener("input", filterDrugs);
        effectFilter.addEventListener("change", filterDrugs);
        ingredientFilter.addEventListener("change", filterDrugs);
        renderDrugs(drugsDatabase);
    }
});

const drugsDatabase = [{
    name: "Elbrikkin",
    effects: ["restorative"],
    ingredients: ["elbrozkaa", "puorikkin"],
    description: "A rare drug that mends open wounds and reconnects broken tissue if applied within an hour after injury."
}, {
    name: "Elpricuss",
    effects: ["enhancement"],
    ingredients: ["elbrozkaa", "apricate", "kapsaris"],
    description: "A stimulant that enhances physical strength while inducing blinding rage and single-minded obsession towards a goal in the user for 30 minutes."
}, {
    name: "Apricuss",
    effects: ["recreational"],
    ingredients: ["apricate"],
    description: "An illegal drug that gives soul-bending euphoria and warmth to the consumer while numbing all sensory input."
}, {
    name: "Petrifying Gas",
    effects: ["damage"],
    ingredients: ["puorikkin", "kapsaris"],
    description: "When puorikkin and kapsaris are burned together, they release yellow gas that crystalizes when in contact with solid surfaces, freezing anyone and anything in its proximity."
}, {
    name: "Caridell",
    effects: ["restorative"],
    ingredients: ["carmiddel"],
    description: "A common drug that relieves the consumer from intense physical pain."
}, {
    name: "Cold Acid",
    effects: ["damage"],
    ingredients: ["kapsaris", "eraser mints"],
    description: "An acidic liquid that dissolves any organic tissue, be it plants, animals, or people."
}, {
    name: "Night-eyes",
    effects: ["utility"],
    ingredients: ["teulnan", "kapsaris"],
    description: "A common drug that gives temporary night vision. Duration of effects depends on how much kapsaris is added."
}, {
    name: "Litkus",
    effects: ["restorative"],
    ingredients: ["litkus"],
    description: "A lightweight painkiller that soothes minor pains, such as sores."
}, {
    name: "Kechi",
    effects: ["restorative", "recreational"],
    ingredients: ["kiépi"],
    description: "An alcoholic drink that warms the body from within, regardless of being served hot, cold, or at room temperature."
}, {
    name: "Puorikkin Cement",
    effects: ["utility"],
    ingredients: ["puorikkin"],
    description: "When puorikkin is burned, its crystalized gas can used as heavy-duty glue in crafts and construction."
}];
function renderDrugs(e) {
    let i = document.getElementById("drugList");
    i.innerHTML = "",
    e.forEach(e => {
        let t = document.createElement("div");
        t.className = "drug-card",
        t.innerHTML = ` <h2>${e.name}</h2> <p>${e.description}</p> <div class="drug-tags"> ${e.effects.map(e => `<span class="tag effect-tag" data-effect="${e}">${e}</span>`).join("")} ${e.ingredients.map(e => `<span class="tag ingredient-tag">${e}</span>`).join("")} </div> `,
        i.appendChild(t)
    }
    )
}
function filterDrugs() {
    let e = document.getElementById("drugSearchInput").value.toLowerCase()
      , i = document.getElementById("effectFilter").value
      , t = document.getElementById("ingredientFilter").value
      , n = drugsDatabase.filter(n => {
        let a = n.name.toLowerCase().includes(e)
          , r = !i || n.effects.includes(i)
          , s = !t || n.ingredients.includes(t);
        return a && r && s
    }
    );
    renderDrugs(n)
}
