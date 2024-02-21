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
let audio = new Audio();
let isGamePlayOn = false;
let artBoard = document.getElementById("artboard");
let modalBox = document.getElementById("modalBox");
let modalClose = document.getElementById("modalClose");

function handleKeyboardButtonPress(event){
    if(isGamePlayOn == false) return;
    let keyPress = event.key;

    if(keyPress === "Escape"){
        gameOver();
    }

    let currentAlphabet = document.getElementById("current-alphabet");
    let currentAlphabetText = currentAlphabet.innerText;
    let currentAlphabetTextLower = currentAlphabetText.toLowerCase();

    if(keyPress === currentAlphabetTextLower){
        audio.src = "../audio/success.mp3";
        audio.play();
        
        removeBackgroundById(keyPress)
        let scoreText = document.getElementById("score");
        let scoreTextInerText = scoreText.innerText;
        let scoreTextInt = parseInt(scoreTextInerText);
        let score = scoreTextInt + 1;
        scoreText.innerText = score;
        continueGame()
        
    }else{
        audio.src = "../audio/wrang.mp3";
        audio.play();
        
        let lifeText = document.getElementById("life");
        let lifeTextInerText = lifeText.innerText;
        let lifeTextInt = parseInt(lifeTextInerText);
        let life = lifeTextInt - 1;
        lifeText.innerText = life;
        let updatedValue = (life/5)*100;
        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedValue}%,red)`;
        console.log(updatedValue);
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
    isGamePlayOn = true;
    hideElementById("home-screen");
    showElementById("play-ground");

    hideElementById("final-score");
    showElementById("play-ground");

    setElementValueById('life', 5);
    setElementValueById('score', 0);

    continueGame();
    artBoard.style.background = "linear-gradient(#FFFFFFB3 100%, red)";
}

function gameOver(){
    isGamePlayOn = false;
    hideElementById("play-ground");
    showElementById("final-score");

    let lastScore = document.getElementById("score");
    let lastScoreInner = lastScore.innerText;

    setElementValueById('game-score',lastScoreInner);


    let currentAlphabet = document.getElementById("current-alphabet");
    let currentAlphabetInner = currentAlphabet.innerText;
    removeBackgroundById(currentAlphabetInner);
    artBoard.style.background = "linear-gradient(#FFFFFFB3 100%, red)";
}

// function modalOpen(event) {
//     if (event.clientY < 20) { // Adjust this value as needed
//         modalBox.classList.remove('hidden');
//     }
// }

// modalClose.addEventListener('click',function(){
//     modalBox.classList.add('hidden');
// })

// document.body.onmousemove = modalOpen;