$(document).ready(function() {
    const convertToWebP = () => {
        const comicImages = $('.comicimagewrap img');
        
        comicImages.each(function() {
            if(this.src.match(/\.(jpg|jpeg|png)$/i)) {
                // Create a proxy URL for the image
                const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(this.src)}&output=webp&q=80`;
                $(this).attr('src', proxyUrl);
            }
        });
    };

    setTimeout(convertToWebP, 500);
});
