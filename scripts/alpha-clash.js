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

    let currentAlphabet = document.getElementById("current-alphabet");
    let currentAlphabetText = currentAlphabet.innerText;
    let currentAlphabetTextLower = currentAlphabetText.toLowerCase();
    console.log(keyPress,currentAlphabetTextLower)

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
    continueGame();
}

