let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");




// this function will produce a computer's choice which should be random;

const genCompchoice = () => {
    let options = ['rock', 'paper' , 'scissors'];
    let randchoiceId = Math.floor(Math.random()*3);
    return options[randchoiceId];
}


// draw match fuction:
const drawfucn = () => {
    console.log("match is draw.");


}


// computer win functions;
const compWin = ()=> {
    console.log("computer wins");
}

const playerWin = () => {
    console.log("Player win");
}
// playGame() function will compare the user's choice and computer's choice to compare the choices and produces result on the basis of both player's choice .

let playGame = (userChoice) => {
    console.log("Player choice is " , userChoice);
     
    // generate computer's choice;
    const compChoice = genCompchoice();
    console.log("Comp choice is ", compChoice);

    // match draw:::
    if(userChoice === compChoice){
        drawfucn();

    }

    //win situations:::
    if(userChoice === 'rock' && compChoice === 'paper' ){
        compWin();

    }
    if(userChoice === 'paper' && compChoice === 'rock' ){
        playerWin();

    }

    if(userChoice === 'rock' && compChoice === 'scissors'){
        playerWin();
    }

     if(userChoice === 'scissors' && compChoice === 'rock'){
        compWin();
    }


    if(userChoice === 'paper' && compChoice === 'scissors'){
        compWin();
    }

    if(userChoice === 'scissors' && compChoice === 'paper'){
        playerWin();
    }

    

    
   
}


//this will track the user's choice ;
choices.forEach((choice) =>{
    let playerChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
       playGame(playerChoice);
    })
})