const playingCard = document.querySelector(".playing");
const gameOverCard = document.querySelector(".gameOver");
const word = document.querySelector(".word");
const second = document.querySelector(".second");
const textInput = document.querySelector(".textInput");
const scoreElse = document.querySelector(".scores");
const words = [
    "sigh",
    "tense",
    "airplane",
    "ball",
    "pies",
    "juice",
    "warlike",
    "bad",
    "north",
    "dependent",
    "steer",
    "silver",
    "highfalutin",
    "superficial",
    "quince",
    "eight",
    "feeble",
    "admit",
    "drag",
    "loving",
];

//generate random word
let randomWord;
let timer = 10;
let scores = 0;
second.textContent = timer;
scoreElse.textContent = scores;

const generateRandomWord = () => {
    randomWord = words[ Math.floor(Math.random() * words.length)];
    word.textContent = randomWord;
}

//timer count down function
const countDown = () => {
    const timerinterval = setInterval(() => {
        second.textContent = timer;
        timer -= 1;
        //timer = timer - 1;

        if(timer <= 0 ) {
            clearInterval(timerinterval);
            gameOver();
        }
    }, 1000);

}

const gameOver = () => {
    playingCard.style.display = "none";
    gameOverCard.style.display = "block";
    gameOverCard.innerHTML = ` 
    <h2>Time Ran Out</h2>
    <p >Your Final score : ${scores}</p>
    <button onclick='location.reload()'>Play Again</button>` ;
}



textInput.addEventListener("input", (event) => {
    const text = event.target.value;
    if(randomWord === text) {
        timer += 2;
        scores++;
        scoreElse.textContent = scores;
        generateRandomWord();
        textInput.value = "";
    }
});
generateRandomWord();
countDown();






