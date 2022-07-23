const choices = ['rock','paper','scissor'];


let computerChoice = document.querySelector("#computer-choice");
let userChoice = document.querySelector("#user-choice");
let result = document.querySelector("#result");

let buttons = document.querySelectorAll(".btn"); 

buttons.forEach(btn => btn.addEventListener('click', (e)=>{
    result.innerText = "";
    let choicePicker = Math.floor(Math.random()*3);
    let cChoice = choices[choicePicker];
    let uChoice = e.target.id;
    computerChoice.innerText = cChoice
    userChoice.innerText = uChoice;

    if(cChoice === uChoice){
        result.innerText = "Draw";
    }else if(cChoice === 'rock' && uChoice === 'scissor'){
        result.innerText = "Computer Wins!";
    }else if(cChoice === 'scissor' && uChoice === 'rock'){
        result.innerText = "User Wins!";
    }else if(cChoice === 'paper' && uChoice === 'rock'){
        result.innerText = "Computer Wins!"; 
    }else if(cChoice === 'rock' && uChoice === 'paper'){
        result.innerText = "User Wins!";
    }else if(cChoice === 'scissor' && uChoice === 'paper'){
        result.innerText = "Computer Wins!";
    }else{
        result.innerText = "User Wins!";
    }

}))