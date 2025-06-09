
(function () {
  const backgrounds = [
    {
      bg: 'url("background/back1.svg")',
      image: 'radios/frame1.png',
      audio: 'audio/nuclear.mp3'
    },
    {
      bg: 'url("background/back2.svg")',
      image: 'radios/frame2.png',
      audio: 'audio/facism.mp3'
    },
    {
      bg: 'url("background/back3.svg")',
      image: 'radios/frame3.png',
      audio: 'audio/cyber.mp3'
    }
  ];
  

  let currentIndex = 0;
  const bgDiv = document.getElementById('background');
  const overlayImage = document.getElementById('overlayImage');
  const nextBtn = document.getElementById('nextBtn');
  const showImageBtn = document.getElementById('showImageBtn');
  let currentAudio = new Audio();

  function setBackground(index) {
    bgDiv.style.opacity = 0;
    overlayImage.classList.remove('visible');

   
    if (!currentAudio.paused) {
      currentAudio.pause();
    }
    currentAudio.currentTime = 0;

    setTimeout(() => {
      bgDiv.style.backgroundImage = backgrounds[index].bg;
      overlayImage.src = backgrounds[index].image;
      currentAudio = new Audio(backgrounds[index].audio);
      bgDiv.style.opacity = 1;
    }, 400);
  }


 
  setBackground(currentIndex);

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    setBackground(currentIndex);
  });

  showImageBtn.addEventListener('click', () => {
    overlayImage.classList.toggle('visible');
  });

  overlayImage.addEventListener('click', () => {
    if (!overlayImage.classList.contains('visible')) return;

    if (currentAudio.paused) {
      currentAudio.play();
    } else {
      currentAudio.pause();
    }
  });
})();
