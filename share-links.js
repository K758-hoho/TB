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