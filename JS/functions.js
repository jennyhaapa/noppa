'use strict';

document.getElementById('dice').addEventListener('click', function() {
    //  satunnaisluku
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    console.log('Arvottu luku:', randomNumber);
    
    // Päivitetään kuva
    const diceImage = this.querySelector('img'); 
    diceImage.src = `./Photos/${randomNumber}.png`;
});
