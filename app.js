let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msgPara = document.querySelector("#msg");

const userScorePara = document.querySelector("#playerScore");
const compScorePara = document.querySelector("#compScore");


// this function will produce a computer's choice which should be random;

const genCompchoice = () => {
    let options = ['rock', 'paper' , 'scissors'];
    let randchoiceId = Math.floor(Math.random()*3);
    return options[randchoiceId];
}

// draw match fuction:
const drawFucn = () => {
    msgPara.innerText = 'Match is a draw!';
    msgPara.style.backgroundColor = '#86A5D9'
    msgPara.style.color = '#202A25'
    
}

// winner or looser decision taking function as named showWinner();

const showWinner = (playerWin ,userChoice , compChoice) => {
    if(playerWin){
        userScore++;
        userScorePara.innerText = userScore;
        msgPara.innerText = `You won!. Your ${userChoice} beat ${compChoice}.`;
        msgPara.style.backgroundColor = '#26F0F1';
        msgPara.style.color = '#202A25'

    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msgPara.innerText = `You lost!. ${compChoice} beat your ${userChoice}.`;
        msgPara.style.backgroundColor = '#5F4BB6';
        msgPara.style.color = '#C4EBC8'
    }
}

// playGame() function will compare the user's choice and computer's choice to compare the choices and produces result on the basis of both player's choice .

let playGame = (userChoice) => {
    
    // generate computer's choice;
    const compChoice = genCompchoice();
    
    // match draw:::
    if(userChoice === compChoice){
        drawFucn();

    } else {
      let playerWin = true;
      if(userChoice === 'rock'){
    
        // paper , scissors
        playerWin = compChoice === 'paper' ? false : true;
      } else if(userChoice === 'paper'){
        // rock or scissors;

        playerWin = compChoice === 'rock' ? true : false;

      } else {
        // rock or paper

        playerWin = compChoice === 'rock' ? false : true;
      }

      showWinner(playerWin,userChoice, compChoice);
    }   
   
}

//this will track the user's choice ;
choices.forEach((choice) =>{
    let playerChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
       playGame(playerChoice);
    })
})