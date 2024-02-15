// function play(){
//     let homeScreen = document.getElementById("home-screen");
//     homeScreen.setAttribute("class","hidden");

//     let playGround = document.getElementById("play-ground");
//     playGround.removeAttribute("class","hidden");
// }

// function getARandomAlphabet(){
//     let alphabets = 'abcdefghijklmnopqrstuvwxyz';
//     let alphabetArray = alphabets.split("");

//     let random = Math.random()*25;
//     let index = Math.round(random);

//     let alphabet = alphabetArray[index];

//     return alphabet;
// }

function handleKeyboardButtonPress(event){
    let keyPress = event.key;
    if(keyPress === "Escape"){
        gameOver();
    }

    let currentAlphabet = document.getElementById("current-alphabet");
    let currentAlphabetText = currentAlphabet.innerText;
    let currentAlphabetTextLower = currentAlphabetText.toLowerCase();

    if(keyPress === currentAlphabetTextLower){
        removeBackgroundById(keyPress)
        let scoreText = document.getElementById("score");
        let scoreTextInerText = scoreText.innerText;
        let scoreTextInt = parseInt(scoreTextInerText);
        let score = scoreTextInt + 1;
        scoreText.innerText = score;

        continueGame()
        
    }else{
        let lifeText = document.getElementById("life");
        let lifeTextInerText = lifeText.innerText;
        let lifeTextInt = parseInt(lifeTextInerText);
        let life = lifeTextInt - 1;
        lifeText.innerText = life;

        if(life === 0){
            gameOver()
        }
    }
}
document.addEventListener("keyup",handleKeyboardButtonPress);


// TODO 2nd system

function continueGame(){
    let alphabet = getARandomAlphabet();
    let currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = alphabet;

    setBackgroundById(alphabet);
}


function play(){
    hideElementById("home-screen");
    showElementById("play-ground");

    hideElementById("final-score");
    showElementById("play-ground");

    setElementValueById('life', 5);
    setElementValueById('score', 0);

    continueGame();
}

function gameOver(){
    hideElementById("play-ground");
    showElementById("final-score");

    let lastScore = document.getElementById("score");
    let lastScoreInner = lastScore.innerText;

    setElementValueById('game-score',lastScoreInner);


    let currentAlphabet = document.getElementById("current-alphabet");
    let currentAlphabetInner = currentAlphabet.innerText;
    removeBackgroundById(currentAlphabetInner);
    
}


