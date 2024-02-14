function play(){
    // hide the home screen. to hide the screen add the class hidden to the home section
    let homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
    // show the playground
    let playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
    continueGame();
}

function getARandomAlphabet(){
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alphabetString.split('');
    let randomNumber = Math.random() * 25;
    let index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    
    let currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = alphabet;
};

function continueGame(){
    // step 1: generate a new number
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
}

