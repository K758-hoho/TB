<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
$(document).ready(function() {
    const convertToWebP = () => {
        const comicImages = $('.comicimagewrap img');
        
        comicImages.each(function() {
            if(this.src.match(/\.(jpg|jpeg|png)$/i)) {
                // Add error handling and fallback
                const originalSrc = this.src;
                const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(originalSrc)}&output=webp&q=80&n=-1`;
                
                // Test image loading
                const testImage = new Image();
                testImage.onload = () => {
                    $(this).attr('src', proxyUrl);
                };
                testImage.onerror = () => {
                    $(this).attr('src', originalSrc);
                };
                testImage.src = proxyUrl;
            }
        });
    };

    // Give more time for initial load
    setTimeout(convertToWebP, 1000);
});
</script>
