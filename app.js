// Static website for Vršofot
// No interactive functionality required

document.addEventListener('DOMContentLoaded', function() {
    // Page loaded successfully
    console.log('Vršofot website loaded');
    
    // Check if font is loaded
    if ('fonts' in document) {
        document.fonts.ready.then(function() {
            console.log('Custom font loaded');
        });
    }
    
    // Add basic image error handling
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        mainImage.addEventListener('error', function() {
            console.warn('Image failed to load: lavicka.jpg');
        });
        
        mainImage.addEventListener('load', function() {
            console.log('Image loaded successfully');
        });
    }
});