$(document).ready(function() {
    const convertToWebP = () => {
        const comicImages = $('.comicpage img, #cc-comic img');
        
        comicImages.each(function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            const tempImage = new Image();
            tempImage.crossOrigin = "Anonymous";
            tempImage.src = $(this).attr('src');
            
            tempImage.onload = () => {
                canvas.width = tempImage.width;
                canvas.height = tempImage.height;
                ctx.drawImage(tempImage, 0, 0);
                
                canvas.toBlob(blob => {
                    const webpUrl = URL.createObjectURL(blob);
                    $(this).attr('src', webpUrl);
                }, 'image/webp', 0.8);
            };
        });
    };

    setTimeout(convertToWebP, 100);
});