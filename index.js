const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {

    const container = document.createElement('div');
    container.appendChild(document.createTextNode('¡Te ganaste una sopita! 🤪'));

    document.getElementById('modalContent').innerHTML = container.innerHTML;
    document.getElementById('myModal').style.display = 'block';

    const videoContainer = document.createElement('div');
    videoContainer.style.width = '100%';
    videoContainer.style.position = 'relative';

    const videoElement = document.createElement('video');
    videoElement.src = 'hello.mp4'; 
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = false;
    videoElement.style.width = '100%';
    videoElement.style.height = 'auto';

    videoContainer.appendChild(videoElement);
    document.getElementById('modalContent').appendChild(videoContainer);
});

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
});
