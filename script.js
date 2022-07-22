let compPoints=0;
let playerPoints=0;

function getComputerChoice(){
    let choice=["Rock","Paper","Scissor"];
    return choice[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection[0].toUpperCase()+playerSelection.slice(1).toLowerCase();
    let win;
    if(playerPoints>=5 || compPoints>=5){
        return {message:"",winner:""};
    }
    if(playerSelection===computerSelection){
        win="none";
        return {message:"Draw!",winner:"none"}
    };
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
    if(win=="none"){}
    else{win==true?playerPoints++:compPoints++;}
    document.querySelector("#computer-score").innerText=compPoints;
    document.querySelector("#player-score").innerText=playerPoints;
    if(playerPoints>=5){
        document.querySelector("#endresult").innerHTML="<span style='color:#00aa00';font-weight:bold'>Congratulations, you won!</span";
        document.querySelector("#play-again").style.display="block";
        return {message:"",winner:""};
    }
    if(compPoints>=5){
        document.querySelector("#endresult").innerHTML="<span style='color:#ff0000'>Oh No! You lost against the computer!</span>";
        document.querySelector("#play-again").style.display="block";
        document.querySelector("#endresult").style.animation='shake 0.5s infinite';
        return {message:"",winner:""};
    }
    return !win?{message:`You Lose! ${computerSelection} beats ${playerSelection}!`,winner:"comp"}:{message:`You Win! ${playerSelection} beats ${computerSelection}!`,winner:"player"};
}
document.querySelector("#scissor").addEventListener("click",()=>document.querySelector("#result").innerText=playRound("Scissor",getComputerChoice()).message);
document.querySelector("#rock").addEventListener("click",()=>document.querySelector("#result").innerText=playRound("Rock",getComputerChoice()).message);
document.querySelector("#paper").addEventListener("click",()=>document.querySelector("#result").innerText=playRound("Paper",getComputerChoice()).message);

document.querySelector("#computer-score").innerText=compPoints;
document.querySelector("#player-score").innerText=playerPoints;
document.querySelector("#yes").addEventListener("click",()=>{
    compPoints=0;playerPoints=0;document.querySelector("#play-again").style.display="none";
    document.querySelector("#endresult").innerText="";
    document.querySelector("#result").innerText="";
    document.querySelector("#computer-score").innerText="0";
    document.querySelector("#player-score").innerText="0";
    document.querySelector("#endresult").style.animation='initial';
});