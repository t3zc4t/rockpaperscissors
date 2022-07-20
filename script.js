function getComputerChoice(){
    let choice=["Rock","Paper","Scissor"];
    return choice[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection[0].toUpperCase()+playerSelection.slice(1).toLowerCase();;
    if(playerSelection===computerSelection){return "Draw! Play again!";}
    let win=false;
    switch(playerSelection){
        case "Scissor":
            if(computerSelection=="Paper"){win=true;}
            else if(computerSelection=="Rock"){win=false;}
        case "Paper":
            if(computerSelection=="Scissor"){win=false;}
            else if(computerSelection=="Rock"){win=true;}
        case "Rock":
            if(computerSelection=="Paper"){win=false;}
            else if(computerSelection=="Scissor"){win=true;}
    }
    return !win?`You Lose! ${computerSelection} beats ${playerSelection}!`:`You Win! ${playerSelection} beats ${computerSelection}!`;
  }