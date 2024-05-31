let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoints = document.querySelector("#userScore");
const compPoints = document.querySelector("#comp-Score")
const generateCompChoice = () => {
    const options = ["rock","paper","scissor"];
    //rock,paper,scissors
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userPoints.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }
    else{
        compScore++;
        compPoints.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw . Play Again";
    msg.style.backgroundColor = 'blue';
}


const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    //Generate computer choice
    let compChoice = generateCompChoice() ;
    console.log("Computer Choice =" ,compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors or paper
            userWin = compChoice === "paper" ? false : true;

        }else if(userChoice === "paper")
        {
            //rock or scissor
            userWin = compChoice === "scissor" ? false : true;
        }else {
            //rock or paper
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
