//rock papers scissors game refactored with the arrays


let playGame = confirm("Hey buddie!\nCan we play Rock Paper Scissors?");

if(playGame){
    //game continues using the while loop
    
   

        while(playGame) {
            const playerChoice = prompt("Please enter rock, paper or scissors");
            if(playerChoice||playerChoice === "") {
                const playerOne = playerChoice.trim().toLowerCase();
            if (playerOne === ""){
                alert("please enter rock, paper or scissors");
                continue;
            }
            if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
                // At this point the player has entered the right choice so let's make the computer make a choice
                const computerChoice = Math.floor(Math.random()*3);
                const Choices = ["rock","paper","scissors"];
                const computer = Choices[computerChoice];

                //since the computer has also made a choice, let's compare the results and determine the winner for this round ....the logic for determining the winner is already written in the first version of the game so we shall just copy it

                const result = playerOne === computer?'Tie'
          :playerOne === 'rock' && computer === 'paper'?`You: ${playerOne}\n computer: ${computer}\n computer wins`
          :playerOne === 'rock' && computer === 'scissors'?`You: ${playerOne}\n computer: ${computer}\n You win`
          :playerOne === 'paper' && computer === 'rock'?`You: ${playerOne}\n computer: ${computer}\n You win`
          :playerOne === 'paper' && computer === 'scissors'?`You: ${playerOne}\n computer: ${computer}\n computer wins`
          :playerOne === 'scissors' && computer === 'rock'?`You: ${playerOne}\n computer: ${computer}\n computer wins`
          :`You: ${playerOne}\n computer: ${computer}\n You win`
          alert(result);

          playGame = confirm("Play Again?");
          if(playGame) {
              continue;
          }else{
              alert("Ok buddie. Thanks for playing");
              break;
          }



            }else{
                alert("please enter rock, paper or scissor");
                continue;
            }
        }else{
            alert("Oh buddie, I guess you changed your mind.\nLet's play next time.");
            break;
        }
       
    }
}
    else{
    alert("Alright buddie. Let's play next time")
}