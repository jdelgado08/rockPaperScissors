
//computer pick
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
   
//get computer choise
function getComputerChoice (){
       return computerChoice();
   }
   
//playerChoice 
function playerChoice() {
    let playerDecision =  prompt("Please enter your choice!!!!").toLowerCase();
    
    return playerDecision;
}   

//get Player Choice
function getPlayerChoice() {
    return playerChoice();
}



function game(player, pc) {

   const gameArray = [];
   // const gameDecision {} 

    for (let i = 0; i < 5; i++) {
        
        player = getPlayerChoice();
        pc = getComputerChoice();

        console.log("Player: " + player + "---- Pc: " + pc);

        if (pc == player) {
            console.log("draw");
            gameArray [i] = 0;        

        } else if (pc == "rock" && player == "scissor") {
            console.log("Pc wins with: " + pc);
            gameArray [i] = 1;   
        } else if (pc == "scissor" && player == "paper") {
            console.log("Pc wins with: " + pc);
            gameArray [i] = 1;   
        } else if (pc == "paper" && player == "rock") {
            console.log("Pc wins with: " + pc);
            gameArray [i] = 1;   
        } else {
            console.log("Player wins with: " + player);
            gameArray [i] = -1;   
        }
    }

    console.log(gameArray);
    
    const sum = gameArray.reduce((accumulator, value)=> {
        return accumulator + value;
    },0);


    if (sum == 0) {
        console.log("DRAW        " + sum);
    } else if (sum > 0) {
        console.log("Pc WINS        " + sum);
    } else {
        console.log("Player WINS        " + sum);
    }


    console.log(sum + " Valor of control"); 
    /* console.log("DRAW        " + sum) */
}

/* function playAround (){
    for (let i = 0; i < 5; i++) {
        game();    
    }
} */


