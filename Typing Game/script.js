let input = document.querySelector("#input-text");
let infoBtn = document.querySelector(".info-btn");
let info = document.querySelector(".info");
let userInfo = document.querySelector(".user-info");
let selectType = document.querySelector(".select-type");
let selectBtn = document.querySelector(".select-btn");
let userName = document.querySelector(".user-name");
let Name = document.querySelectorAll(".name");
let timerDisplay = document.querySelector(".timer");
let wpmDisplay = document.querySelectorAll(".WPM");
let scoreDisplay = document.querySelectorAll(".score");
let wordsToWriteDisplay = document.querySelector(".words-to-write");
let startBtn = document.querySelector("#startBtn");
let date = document.querySelector(".date");
let time = document.querySelector(".time");
let reasultContainer = document.querySelector(".result-container");
let click = document.querySelector(".click");
let firstPage = document.querySelector(".first-page");

click.addEventListener("click",()=>{
    firstPage.style.display = "none";
});



let words = 'asdf jkl; asjk dfl; kdas askl jksd flag dalj lasd asdf jkl; asjk dfl; kdas askl jksd flag dalj lasd a;sl alik askl azal akad amzo qprl usad cat dog apple tree ball sun chair book door ship cat dog apple tree ball sun chair book door shipmountain window bicycle planet pencil letter soccer coffee table gardenmountain window bicycle planet pencil letter soccer coffee table gardenencyclopedia entrepreneur photography basketball independent architect community understand discovery excellentencyclopedia entrepreneur photography basketball independent architect community understand discovery excellentpneumonoultramicroscopicsilicovolcanoconiosis floccinaucinihilipilification antidisestablishmentarianism hippopotomonstrosesquipedaliophobia circumlocution pneumonoultramicroscopicsilicovolcanoconiosis floccinaucinihilipilification antidisestablishmentarianism hippopotomonstrosesquipedaliophobia circumlocution tree bicycle architect pencil chair understand basketball community excellent apple door window ship table garden tree bicycle architect pencil chair understand basketball community excellent apple door window ship table garden let lan land main soo soot laugh land loud anti bio could query count asdf jkl; asjk dfl; kda askl jksd flag dalj lasd asdf jkl; asjk dfl; kda askl jksd flag dalj lasd a;sl alik askl azal akad amzo qprl usad let lan land main soo soot laugh land loud anti bio could query count asdf jkl; asjk dfl; kda askl jksd flag dalj lasd asdf jkl; asjk dfl; kda askl jksd flag dalj lasd a;sl alik askl azal akad amzo qprl usad let lan land main soo soot laugh land loud anti bio could query count asdf jkl; asjk dfl; kda askl jksd flag dalj lasd asdf jkl; asjk dfl; kda askl jksd flag dalj lasd a;sl alik askl azal akad amzo qprl usad let lan land main soo soot laugh land loud anti bio could query count iwfdsd  infinite words abcd efgh load made unity show less little main asdfhglhiefdsiosdfnvodfsdfigurgfdjngfisdfdfsdfjg'.split(' ');
let sentences = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, id. Accusamus possimus ad quas rem nulla quam voluptas aut, ullam omnis rerum praesentium, maiores accusantium eaque dolor magnam? Consequuntur, alias!ly relate house expert charge interview itself because job consider knowledge color low late hope significant understand business home where entire tonight want heavy such sell way employee by civil hold executive become station successful enough task exactly reflect about fear let perform term always industry spend feeling play federal performance season major buy ability evidence treat wall true like project return popular whether inside especially say size fast really activity final use strategy maintain see add explain conference school line almost economy rise various claim range imagine their central watch art right century scientist thought radio rule call administration light concern pick coach make chair suddenly information show rock pretty ready hang finally music cold join professional later though series head college building career consumer everyone sure area maybe history wear land matter save realize family plan risk compare prepare simply meet last however score rest card also bring begin movement moment material night reduce these live condition yeah food than morning city speak enjoy laugh teacher cell health well summer player interesting might subject movie themselves price trip address anything million get image probably recent why reveal billion write hair may remove car response just`.split(' ');

let timeLeft = 300;
let timer;
let score = 0;
let wpm = 0;
let wrongWords = 0;

input.disabled = true;

infoBtn.addEventListener("click", () => {
    let userNameVal = userName.value.trim();
    if (userNameVal.length !== 0) {
        userInfo.style.display = "none";
        selectType.style.display = "block";
        Name.innerText = userNameVal;
    } else {
        alert("Please enter your name before proceeding.");
    }
});

selectBtn.addEventListener("click", () => {
    let todayDate = new Date();
    date.innerText = `${todayDate.getDate()}/${todayDate.getMonth() + 1}/${todayDate.getFullYear()}`;
    time.innerHTML = `Time:<a>${todayDate.getHours()}:${todayDate.getMinutes()}:${todayDate.getSeconds()}</a>`;
    let wordsRadio = document.querySelector("#words");
    let sentencesRadio = document.querySelector("#sentences");
    
    if (wordsRadio.checked || sentencesRadio.checked) {
        info.style.display = "none";
        startBtn.style.display = "inline";
        input.style.display = "inline-block";
        startBtn.style.position = "relative";
        wordsToWriteDisplay.style.zIndex = "0";
    } else {
        alert("Please select a type before proceeding.");
    }
});

startBtn.addEventListener("click", () => {
    let wordsRadio = document.querySelector("#words");
    let sentencesRadio = document.querySelector("#sentences");
    

    if (startBtn.innerText === "Start Game") {
        if (wordsRadio.checked) {
            startGame(words);
        } else if (sentencesRadio.checked) {
            startGame(sentences);
        }
    } else if (startBtn.innerText === "Pause") {
        input.disabled = true;
        pauseGame();
    } else if (startBtn.innerText === "Resume") {
        input.disabled = false;
        resumeGame();
    }
});

function startGame(wordList) {
    input.disabled = false;
    input.value = '';
    input.focus();
    wordsToWriteDisplay.innerText = wordList.join(' ');
    timeLeft = 300;
    score = 0;
    wpm = 0;
    wrongWords = 0;
    startBtn.innerText = "Pause"; 
    startTimer();
}

function startTimer() {
    timerDisplay.innerText = timeLeft;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.innerText = timeLeft;
        } else {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function pauseGame() {
    clearInterval(timer);
    startBtn.innerText = "Resume"; 
}

function resumeGame() {
    startBtn.innerText = "Pause"; 
    startTimer();
}

input.addEventListener("input", () => {
    let typedText = input.value.trim();
    let wordList = wordsToWriteDisplay.innerText.split(' ');

    if (typedText === wordList[0]) {
        score++;
        wpm = (score / (300 - timeLeft)) * 60;
        scoreDisplay.forEach(el => el.innerText = score);
        wpmDisplay.innerText = Math.floor(wpm);
        wordList.shift();
        wordsToWriteDisplay.innerText = wordList.join(' ');
        input.value = ''; 
    } else if (typedText.length === wordList[0].length) {
        wrongWords++;
        document.querySelector(".Wrong").innerText = wrongWords;
        wpm = (score / (300 - timeLeft)) * 300;
        scoreDisplay.forEach(el => el.innerText = score);
        wpmDisplay.innerText = Math.floor(wpm);
        wordList.shift();
        wordsToWriteDisplay.innerText = wordList.join(' ');
        input.value = ''; 
    }
});
function endGame() {
    input.disabled = true;
    input.value = "";
    startBtn.innerHTML = "Start Game";
    wordsToWriteDisplay.innerText = "";
    clearInterval(timer);
    reasultContainer.style.display = "flex";
    
    startBtn.style.display = "none";
    input.style.display = "none";
    wordsToWriteDisplay.style.zIndex = "-100";
    startBtn.style.position = "static";
    
    document.querySelector("#result-name").innerText = userName.value;
    scoreDisplay.innerText = score;
    document.querySelector(".WPM").innerText = Math.floor(wpm);
    document.querySelector(".wrong-words").innerText = wrongWords;
    document.querySelector(".right-words").innerText = score - wrongWords;

    resetGame();
}

function resetGame() {
    score = 0;
    wpm = 0;
    wrongWords = 0;
    timeLeft = 300;
    timerDisplay.innerText = timeLeft;
    document.querySelector(".Wrong").innerText = wrongWords;
    scoreDisplay.innerText = score;
    wpmDisplay.innerText = 0;
} 
input.addEventListener('keydown', function(event) {
    if (!input.disabled) {
        const keysToPrevent = ['Enter', 'Backspace', 'Delete', ' '];
        if (keysToPrevent.includes(event.key)) {
            event.preventDefault();
        }
    }
});
