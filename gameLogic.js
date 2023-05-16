function computerChoice (){

 number = Math.floor(Math.random()*3+1);

 switch (number) {
    case 1:
        
        strg = "rock"
        break;
    case 2:
        strg = "paper"
        break;
    case 3:
        strg = "scissor"
 }

 return strg;
}

function getComputerChoice (){
    return computerChoice();
}


function gameDecision (){

    
    let pcDecision = getComputerChoice();
    let playerDecision = prompt("Please enter your choice!!!!").toLowerCase();
    
    console.log( "Player: "+ playerDecision + "---- Pc: " +pcDecision);
    
    if (pcDecision == playerDecision) {
        console.log("draw")
    }  else if (pcDecision == "rock" && playerDecision == "scissor" ) {
        console.log("Pc wins with: " + pcDecision);
      } else if (pcDecision == "scissor" && playerDecision == "paper") {
        console.log("Pc wins with: " + pcDecision);
      } else if (pcDecision == "paper" && playerDecision == "rock") {
        console.log("Pc wins with: " + pcDecision);
      } else {
       console.log( "Player wins with" + playerDecision);
      }  
}
