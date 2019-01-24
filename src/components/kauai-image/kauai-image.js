import Kauai from './kauai.png';
import './kauai-image.scss';

class KauaiImage {
    render() {
        const img = document.createElement("img");
        img.src = Kauai;
        img.alt = "Kauai";
        img.classList.add("kauai-image");

        const bodyDomElement = document.querySelector("body");
        bodyDomElement.appendChild(img);
    }
}

export default KauaiImage;