import './imageCarousel.css';

export function createImageCarousel(images, source) {
    const carousel = document.createElement('div');
    carousel.className = 'carousel';

    const image = document.createElement('img');
    image.src = images[0];
    carousel.appendChild(image);

    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    carousel.appendChild(buttons);

    const sourceButton = document.createElement('button');
    sourceButton.className = 'source-button';
    sourceButton.textContent = 'Source';
    sourceButton.addEventListener('click', () => {
        window.open(source);
    });
    carousel.appendChild(sourceButton);

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