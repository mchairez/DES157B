(function(){
    'use strict';
    console.log('reading JS');

    const actionArea = document.querySelector('#actions');
    const game = document.querySelector('#game');
    const selectSound = new Audio('audio/radio.mp3');

    function radioStart() {
        const buttonClickSound = new Audio('audio/radio.mp3');
        buttonClickSound.play();
        game.innerHTML = `<p>radio start</p>`; 
    }

    actionArea.addEventListener('click', radioStart);

})();