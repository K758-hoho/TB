$(document).ready(function() {
    // This ensures the code runs after your page loads
    
    const convertToWebP = () => {
        // Targets specifically comic images in ComicFury's containers
        const comicImages = $('.comicpage img, #cc-comic img');
        
        comicImages.each(function() {
            // Creates a temporary canvas to handle the conversion
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Sets up the image for conversion
            const tempImage = new Image();
            tempImage.crossOrigin = "Anonymous";  // Allows loading images from ComicFury
            tempImage.src = $(this).attr('src');
            
            tempImage.onload = () => {
                // Draws the original image to canvas
                canvas.width = tempImage.width;
                canvas.height = tempImage.height;
                ctx.drawImage(tempImage, 0, 0);
                
                // Converts to WebP with 80% quality
                canvas.toBlob(blob => {
                    const webpUrl = URL.createObjectURL(blob);
                    $(this).attr('src', webpUrl);
                }, 'image/webp', 0.8);
            };
        });
    };

    // Gives ComicFury time to load before converting
    setTimeout(convertToWebP, 100);
});
