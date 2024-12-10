// Camera access and permission script, plus toggle commands

AFRAME.registerComponent('xr-camera', {
    init: async function () {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl", { xrCompatible: true });
        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            preserveDrawingBuffer: true,
            canvas: canvas,
            context: gl
        });

        const session = await navigator.xr.requestSession("immersive-ar", { requiredFeatures: ['hit-test'] });
        session.updateRenderState({
            baseLayer: new XRWebGLLayer(session, gl)
        });

        const referenceSpace = await session.requestReferenceSpace('local');
        const camera = new THREE.PerspectiveCamera();
        camera.matrixAutoUpdate = false;

        const onXRFrame = (time, frame) => {
            session.requestAnimationFrame(onXRFrame);
            gl.bindFramebuffer(gl.FRAMEBUFFER, session.renderState.baseLayer.framebuffer);

            const pose = frame.getViewerPose(referenceSpace);
            if (pose) {
                const view = pose.views[0];
                camera.matrix.fromArray(view.transform.matrix);
                camera.projectionMatrix.fromArray(view.projectionMatrix);
                camera.updateMatrixWorld(true);
            }

            renderer.render(scene, camera);
        };

        session.requestAnimationFrame(onXRFrame);
    }
});

// Add the XR camera to AR scene
document.querySelector('#AR-scene').setAttribute('xr-camera', '');

// Toggle between AR and forest scene
document.addEventListener('DOMContentLoaded', () => {
    let isARMode = true;
    const forest = document.getElementById('forest-scene');
    const videoContainer = document.getElementById('AR-scene');
    
    document.getElementById('corner-toggle').addEventListener('click', () => {
        isARMode = !isARMode;

        if (isARMode) {
            forest.setAttribute('visible', 'false');
            videoContainer.setAttribute('visible', 'true');
            document.getElementById('corner-toggle').setAttribute('text', 'value', 'Forest');
        } else {
            forest.setAttribute('visible', 'true');
            videoContainer.setAttribute('visible', 'false');
            document.getElementById('corner-toggle').setAttribute('text', 'value', 'AR');
        }
    });
});