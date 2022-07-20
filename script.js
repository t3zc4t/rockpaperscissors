function getComputerChoice(){
    let choice=["Rock","Paper","Scissor"];
    return choice[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection[0].toUpperCase()+playerSelection.slice(1).toLowerCase();;
    if(playerSelection===computerSelection){return {message:"Draw!",winner:"none"}};
    let win;
    switch(playerSelection){
        case "Scissor":
            if(computerSelection=="Paper"){win=true;}
            else if(computerSelection=="Rock"){win=false;}break;
        case "Paper":
            if(computerSelection=="Scissor"){win=false;}
            else if(computerSelection=="Rock"){win=true;}break;
        case "Rock":
            if(computerSelection=="Paper"){win=false;}
            else if(computerSelection=="Scissor"){win=true;}break;
    }
    return !win?{message:`You Lose! ${computerSelection} beats ${playerSelection}!`,winner:"comp"}:{message:`You Win! ${playerSelection} beats ${computerSelection}!`,winner:"player"};
}
function game(){
    let compPoints=0;
    let playerPoints=0;
    for (let i = 0; i < 5; i++) {
        let userInput=prompt("Enter your Choice: ");
        let gameplay=playRound(userInput, getComputerChoice());
        if(gameplay.winner=="player"){playerPoints++};
        if(gameplay.winner=="comp"){compPoints++};
        gameplay;
        console.log(gameplay.message);
     }
     console.log(`Finished! ${playerPoints}(You) : ${compPoints}(Computer)!`);
}