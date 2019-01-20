import Kauai from './kauai.png';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Kauai';
    img.width = 300;
    img.src = Kauai;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;