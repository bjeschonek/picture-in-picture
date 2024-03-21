//DOM elements

const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

//select media stream

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

buttonElement.addEventListener('click', async () => {
    buttonElement.disabled = true;
    await videoElement.requestPictureInPicture();
    buttonElement.disabled = false;
});

selectMediaStream();