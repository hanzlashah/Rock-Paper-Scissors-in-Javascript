//MiniProject - Stone, Paper & Scissors Game
let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
//console.log(choices)
/*
console.log(Math.random());
console.log(Math.random() *3);
console.log(Math.floor(Math.random() *3));
*/
const genCompChoice = () =>{
	const options=["rock","paper","scissors"];
	//rock, paper,Scissors
	//console.log(Math.random());
	const randIdx= Math.floor(Math.random() *3);
	return options[randIdx]
}
const drawGame =() =>{
	console.log("game was draw");
	msg.innerText="Game was draw. Play again!";
	msg.style.backgroundColor ="#081b31";
}
const showWinner = (userWin,userChoice,compChoice) =>{
	if(userWin){
	userScore++;
	userScorePara.innerText=userScore;
	//console.log("You win");
	msg.innerText="You win";
	msg.innerText=`You win! ${userChoice} beats ${compChoice} `;
	msg.style.backgroundColor ="green";
	}
	else{
		compScore++;
		compScorePara.innerText=compScore;
	//console.log("You lose");
	msg.innerText="You lose";
	msg.innerText=`You lost ${compChoice} beats your ${userChoice} `;
	msg.style.backgroundColor ="red";
	}
	
}
const playGame = (userChoice) =>{
	console.log("User Choice : ",userChoice);
	//Generate computer choice -> modular or reuseable code 
	const compChoice = genCompChoice();
	console.log("Computer Choice : ",compChoice);
	if( userChoice === compChoice){
		//Draw Game
		drawGame();
	}
	else{
		let userWin= true;
		if(userChoice == "rock"){
			// scissors, paper 
			userWin = compChoice === "paper" ? false : true;
			
		}
		else if (userChoice == "paper"){
			//rock , scissors  
			userWin = compChoice === "scissors" ? false : true;
		}
		else {
			//rock , Paper
			userWin = compChoice ==="rock" ? false : true;
			
		}
		showWinner(userWin,userChoice,compChoice);
	}
}
/*
User Choice :  paper
Computer Choice :  rock
You win
---------
User Choice :  rock
Computer Choice :  scissors
You win
-----------
User Choice :  scissors
Computer Choice :  scissors
game was draw
*/
choices.forEach((choice)=>{
	// console.log(choice)
	choice.addEventListener("click",()=>{
		let userChoice= choice.getAttribute("id")
		//console.log("User Choice : ",userChoice);
		
		playGame(userChoice);
	})
})




