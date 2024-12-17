$(document).ready(function() {
    const convertToWebP = () => {
        // Target your specific comic structure
        const comicImages = $('.comicimagewrap img');
        
        comicImages.each(function() {
            if(this.src.match(/\.(jpg|jpeg|png)$/i)) {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                const tempImage = new Image();
                tempImage.crossOrigin = "Anonymous";
                tempImage.src = this.src;
                
                tempImage.onload = () => {
                    canvas.width = tempImage.width;
                    canvas.height = tempImage.height;
                    ctx.drawImage(tempImage, 0, 0);
                    
                    canvas.toBlob(blob => {
                        const webpUrl = URL.createObjectURL(blob);
                        $(this).attr('src', webpUrl);
                    }, 'image/webp', 0.8);
                };
            }
        });
    };

    setTimeout(convertToWebP, 500);
});
