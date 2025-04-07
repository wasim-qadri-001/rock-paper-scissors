let userName = prompt("Enter your name :");
let userScore = 0;
let compScore = 0;

let userScoreAccess = document.querySelector("#user-score");
let compScoreAccess = document.querySelector("#computer-score");
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user = document.querySelector("#user-name");

user.innerText = `${userName} Score`;

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    return options[Math.floor(Math.random()*3)];
};

const drawGame = ()=>{
    msg.innerText = "It is a Draw !";
    msg.style.backgroundColor = " #50ffb1";
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin === true){
        userScore++;
        userScoreAccess.innerText = userScore;
        msg.innerText = `You Won!!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreAccess.innerText = compScore;
        msg.innerText = `OOPS!! You Lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    let compChoice = genCompChoice();
    let userWin = true;
    if(userChoice === compChoice){
        drawGame();
    }
    else if (userChoice === "rock"){
        userWin = compChoice === "scissors" ? true : false;
        showWinner(userWin,userChoice,compChoice);
    }
    else if (userChoice === "paper"){
        userWin = compChoice === "rock" ? true : false;
        showWinner(userWin,userChoice,compChoice);
    }
    else{
        userWin = compChoice === "paper" ? true : false;
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});