let userScore = 0;
let cmptrScore = 0;

const userScorePara = document.querySelector('#user-score');
const cmptrScorePara = document.querySelector('#cmptr-score');

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const computerChoice = () =>{
    const choices = ['rock', 'paper', 'scissor'];
    const randomIdx = Math.floor(Math.random() * 3);
    return choices[randomIdx];
};

const drawGame = () =>{
    console.log("Game is Draw");
    msg.innerText = "Draw!"
    msg.style.background = 'blue';
};

const showWinner = (userWin, userChoice, cmptrChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!")
        msg.innerText = `You Win! your ${userChoice} beats ${cmptrChoice}`;
        msg.style.background = 'green';
    }else{
        cmptrScore++;
        cmptrScorePara.innerText = cmptrScore;
        console.log("You Lose!")
        msg.innerText = `You Lose! ${cmptrChoice} beats your ${userChoice}`;
        msg.style.background = 'red';
    }
};

const playGame = (userChoice) =>{
    // console.log("user choice", userChoice);
    const cmptrChoice = computerChoice();
    // console.log("computer choice", cmptrChoice)

    if (userChoice === cmptrChoice){
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === 'rock'){
            // scissor, paper
            userWin = cmptrChoice === 'paper'? false : true;
        }else if(userChoice === 'paper'){
            // rock, scissor
            userWin = cmptrChoice === 'scissor'? false : true;
        }else {
            // rock, paper
            userWin = cmptrChoice === 'rock'? false : true;
        }
        showWinner(userWin, userChoice, cmptrChoice);
    }
};

choices.forEach((ch) =>{
    // console.log(ch);
    ch.addEventListener("click", () =>{
        const userChoice = ch.getAttribute("id")
        // console.log('u clicked me', userChoice)
        playGame(userChoice)
    });
});

const reset = () => {
    userScore = 0;
    cmptrScore = 0;

    userScorePara.innerText = 0;
    cmptrScorePara.innerText = 0;

    msg.innerText = "Play your move";
    msg.style.background = '#081b31';
};
