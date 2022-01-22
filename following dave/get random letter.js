
//A challenge that requires you to get a random letter from a string

//my approach
const myName = "diing";
const myNameArray = myName.split("");
let x = Math.floor(Math.random()*myNameArray.length);
console.log(myNameArray[x]);



//Mr. Dave Approach
const anyName = "diing malueth"
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));



let response = confirm("Can we send notifications every week?");
console.log(response);



//Overall best approach to display apropriate message depending on user input
let namen = prompt("Please enter your name");
if(namen){
    console.log(namen.length);
    console.log(namen.trim().length);
    console.log(namen.trim());
}else{
    console.log('you did not enter your name.');
}


//getting the user input
































//My Very first interactive game!





let playGame = confirm("Hey Buddie!\nShall we Play\nRock, Paper or Scissors?");
if(playGame){
    //game continues
   let playerChoice = prompt("Please enter rock, paper or scissor");
   if(playerChoice){
       //game continues
       playerChoice.trim().length;
      let playerOne = playerChoice.trim().toLowerCase();
      if(playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors'){
          //game continues
          let computerChoice = Math.floor(Math.random()*3+1);

         let computer =  computerChoice === 1?'rock'
                         :computerChoice === 2?'paper'
                         :'scissors';
          //compare the player input with the computer
         let result = playerOne === computer?'Tie'
          :playerOne === 'rock' && computer === 'paper'?`You: ${playerOne}\n computer: ${computer}\n computer wins`
          :playerOne === 'rock' && computer === 'scissors'?`You: ${playerOne}\n computer: ${computer}\n You win`
          :playerOne === 'paper' && computer === 'rock'?`You: ${playerOne}\n computer: ${computer}\n You win`
          :playerOne === 'paper' && computer === 'scissors'?`You: ${playerOne}\n computer: ${computer}\n computer wins`
          :playerOne === 'scissor' && computer === 'rock'?`You: ${playerOne}\n computer: ${computer}\n computer wins`
          :`You: ${playerOne}\n computer: ${computer}\n You win`
          alert(result);
          let playAgain = confirm("You want to Play again?");
          if(playAgain){
              location.reload();
          }else{
              alert('Ok buddie! come and play next time');
          }
      }else{
          alert("please make sure to enter rock or paper or scissor.\nTry again?")
      }
   }else{
       alert("You changed your mind. Let's play next time.");
   }
}else{
    alert("Älright pal. Seems you are busy\nLet's play next time then.");
};




//finally the rock paper scissors is done