function hideElementById(elementId){
    let element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElementById(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove("hidden")
}

function setBackgroundById(elementId){
    let element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}

function removeBackgroundById(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}

function getARandomAlphabet(){
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let alphabetArray = alphabets.split("");

    let random = Math.random()*25;
    let index = Math.round(random);

    let alphabet = alphabetArray[index];

    return alphabet;
}