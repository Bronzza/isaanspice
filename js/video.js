document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero__video');
    
    // Log video element state
    console.log('Video element:', video);
    console.log('Video ready state:', video.readyState);
    console.log('Video paused:', video.paused);
    console.log('Video current time:', video.currentTime);
    
    // Force video play and remove poster when playing
    video.play().then(() => {
        console.log('Video started playing');
        video.removeAttribute('poster'); // Remove poster when video plays
    }).catch(function(error) {
        console.log("Video play failed:", error);
    });

    // Monitor video state
    video.addEventListener('playing', function() {
        console.log('Video is now playing');
        video.style.opacity = '1';
        video.removeAttribute('poster');
    });

    video.addEventListener('loadeddata', function() {
        console.log('Video data loaded');
    });

    // Check if video is actually playing
    video.addEventListener('playing', function() {
        console.log('Video is playing');
    });

    video.addEventListener('pause', function() {
        console.log('Video is paused');
    });

    // Add this to check if video failed to load
    video.addEventListener('error', function(e) {
        console.log('Error loading video:', e);
    });
}); 