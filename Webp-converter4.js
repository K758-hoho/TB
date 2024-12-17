$(document).ready(function() {
    const convertToWebP = () => {
        const comicImages = $('.comicimagewrap img');
        
        comicImages.each(function() {
            if(this.src.match(/\.(jpg|jpeg|png)$/i)) {
                const originalSrc = this.src;
                // Enhanced proxy URL with direct fetch
                const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(originalSrc)}&output=webp&q=80&n=-1&af`;
                
                $(this).attr('src', proxyUrl)
                    .on('load', function() {
                        $(this).css('visibility', 'visible');
                    });
            }
        });
    };

    setTimeout(convertToWebP, 1500);
});
