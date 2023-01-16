const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const refBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

const inputField = document.querySelector("input");

let correctWord;
let timer;

const initTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    },1000);
}

const initGame = () =>{
    initTimer(31);
    inputField.value = "";
    let randomObj = words[Math.floor(Math.random()* words.length)];
    let wordArr = randomObj.word.split("");


    for (let i = wordArr.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i+1));
        [wordArr[i],wordArr[j]] = [wordArr[j],wordArr[i]];
    } 
    wordText.innerText = wordArr.join("");
    hintText.innerText = randomObj.hint;

    correctWord = randomObj.word.toLowerCase();

}

initGame();

const checkWord = () =>{
    let userWord = inputField.value.toLowerCase();
    
    if(!userWord)
        return alert(`Please enter a word`);

    if(userWord != correctWord)
    {
        return alert(`Oops! ${userWord} is not correct word`);
    }
    alert(`${userWord.toUpperCase()} is the correct word !`);
    initGame();
    
}

refBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);