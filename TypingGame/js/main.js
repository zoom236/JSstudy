const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")
const GAME_TIME = 5;
const beginnerLevel = document.querySelector("beginner")
const interLevel = document.querySelector("intermediate")
const higherLevel = document.querySelector("higher")


const API_URL = "https://random-word-api.herokuapp.com/word?number=100"

let level =[8,9,10]
let score = 0;
let words ;
let time = 0;
let timeInterval; 
let isPlaying = false
let isReady = false;
let lv = level[0]

init()

async function init() {
    const res = await fetch(API_URL)
    const data = await res.json();
    words = data.filter(item => {
        return item.length < lv
    })
    isReady = true;
    console.log(words)
}






//promise
// function init(){
//     const res = fetch(API_URL).then(res=> res.json()).then(data=>words = data);
// }

//async await - promise 방법 대신 사용할 수 있는 방법
//async function(비동기함수) : callback과 promise의 단점을 보완하기 위해 추가됨
// async function init() {
//     const res = await fetch(API_URL)
//     const data = await res.json();
//     words = data.filter(item => {
//         return item.length < lv
//     })
//     isReady = true;
//     console.log(words)
// }




wordInput.addEventListener("input", e => {
    const typedText = e.target.value
    const currentText = currentWord.innerText;
    if (typedText.toUpperCase() === currentText.toUpperCase() && isReady){
        addScore()
        setNewWord()

    }
    console.log(typedText == currentText, typedText,currentText)
})

//게임종료
function gameover(){
    console.log("gameover")
    isPlaying=false
    clearInterval(timeInterval)
    timeInterval = null;
    messageDisplay.innerText = "GAME OVER"
    score = 0;
    currentWord.innerText = "Start"
}


//시간 카운트다운
function countDown(){
    console.log(time)
    time = time-1;
    timeDisplay.innerText = time;
    if(time ===0){
        gameover()
    }
}


function setNewWord(){
    time = GAME_TIME;
    wordInput.value = ""
    messageDisplay.innerText = "Now Playing!!!"
    const randomIndex = Math.floor(Math.random()*words.length);
    currentWord.innerText = words[randomIndex]

    if(!isPlaying){
        timeInterval = setInterval(countDown,1000)
        isPlaying = true;
    }

    
}

function addScore(){
    score +=1
    console.log(score)
    scoreDisplay.innerText = score
}