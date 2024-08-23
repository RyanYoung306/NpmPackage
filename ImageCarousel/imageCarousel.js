import './imageCarousel.css';
export function createImageCarousel (images) {
    const carousel = document.createElement('div');
    carousel.className = 'carousel';

    const image = document.createElement('img');
    image.src = images[0];
    carousel.appendChild(image);

    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    carousel.appendChild(buttons);

    images.forEach((imageSrc, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.addEventListener('click', () => {
            image.src = imageSrc;
        });
        buttons.appendChild(button);
    });

    return carousel;
}