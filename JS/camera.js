// Camera access and permission script, wait to push this. 

async function startCamera() {
    const video = document.getElementById('video');

    try {
        // Request access to the user's camera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream; // Set the video source to the stream
        video.play(); // Start playing the video

        // Set the video as a texture for the A-Frame material
        video.addEventListener('loadeddata', () => {
            const videoContainer = document.getElementById('videoContainer');
            videoContainer.setAttribute('material', 'src', video);
        });
    } catch (error) {
        console.error('Error accessing the camera: ', error);
    }
}

// Start the camera when the page loads
window.addEventListener('load', startCamera);

// html for when I'm ready to start redesigning stuff after I work
// through my mess of tabs T.T

//  <!-- Video feed displayed on a plane -->
// <a-entity id="videoContainer" geometry="primitive: plane; width: 4; height: 3" position="0 1 -4" material="shader: flat; src: #video"></a-entity>
//</a-scene>

//<!-- Video element -->
// <video id="video" style="display: none;" autoplay playsinline></video>