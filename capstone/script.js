(function () {
    const backgrounds = [
    {
        bg: 'url("background/back1.svg")',
        image: 'radios/frame1.png'
    },
    {
        bg: 'url("background/back2.svg")',
        image: 'radios/frame2.png'
    },
    {
        bg: 'url("background/back3.svg")',
        image: 'radios/frame3.png'
    }
    ];

    let currentIndex = 0;
    const bgDiv = document.getElementById('background');
    const overlayImage = document.getElementById('overlayImage');
    const nextBtn = document.getElementById('nextBtn');
    const showImageBtn = document.getElementById('showImageBtn');

    function setBackground(index) {
    // Fade out background
    bgDiv.style.opacity = 0;

    // Reset image visibility
    overlayImage.classList.remove('visible');

    setTimeout(() => {
        // Set background
        bgDiv.style.backgroundImage = backgrounds[index].bg;
        bgDiv.style.opacity = 1;

        // Set the image source for this background
        overlayImage.src = backgrounds[index].image;
    }, 400);
    }

    // Initialize
    setBackground(currentIndex);

    nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    setBackground(currentIndex);
    });

    showImageBtn.addEventListener('click', () => {
    overlayImage.classList.toggle('visible');
    });
})();