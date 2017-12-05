/*jslint devel: true */

alert("INSTRUCTIONS: Player X starts always the Game!");
var cells = document.getElementsByClassName('cell');
var message = document.getElementById('message');
var currentPlayer = "X";
var gameOver = false;


function viewMessages(text) {
	message.innerHTML = text;
}


function viewWinner() {
	if (!gameOver){
		 var winner = getWinner();
		 var noWinner = checkForDraw();
		  if (winner == "X" ) {
			  viewMessages("Congrats Player X you won!");
			  playAgainPopUp();
		  }
		  if (winner == "O" ) {
			  viewMessages("Congrats Player O you won!");
			  playAgainPopUp();
		  }
		  if (noWinner == "draw") {
			  viewMessages("Nobody wins! It's Draw!");
			  playAgainPopUp();
		  }
	  }
}


function putSymbol(cell) {
	if (cell.innerHTML == "") {
	  cell.innerHTML = currentPlayer;
	  switchPlayer();
	}
	  viewWinner();
}


function switchPlayer(){
	if (currentPlayer == "X"){
        currentPlayer = "O";
        viewMessages("It's " + currentPlayer + " turn");
    }else{
        currentPlayer = "X";
        viewMessages("It's " + currentPlayer + " turn");
    }
}
  
/*The winning combinations to get a winner. The combinations are 
starting from 0-8 and are horizontal, vertikal and diagonal.*/
function getWinner() {
	if (cells[0].innerHTML == cells[1].innerHTML && //Horizontal
		cells[0].innerHTML == cells[2].innerHTML &&
		cells[0].innerHTML !== "") {
		colorBackground(cells[0]);
		colorBackground(cells[1]);
		colorBackground(cells[2]);
		gameOver = true;
		return cells[0].innerHTML;
	}
	if (cells[3].innerHTML == cells[4].innerHTML && 
		cells[3].innerHTML == cells[5].innerHTML &&
		cells[3].innerHTML !== "") {
		colorBackground(cells[3]);
		colorBackground(cells[4]);
		colorBackground(cells[5]);
		gameOver = true;

		return cells[3].innerHTML;
	}
	if (cells[6].innerHTML == cells[7].innerHTML && 
		cells[6].innerHTML == cells[8].innerHTML &&
		cells[6].innerHTML !== "") {
		colorBackground(cells[6]);
		colorBackground(cells[7]);
		colorBackground(cells[8]);
		gameOver = true;
		return cells[6].innerHTML;
	}
	if (cells[0].innerHTML == cells[3].innerHTML && //Vertikal
		cells[0].innerHTML == cells[6].innerHTML &&
		cells[0].innerHTML !== "") {
		colorBackground(cells[0]);
		colorBackground(cells[3]);
		colorBackground(cells[6]);
		gameOver = true;
		return cells[0].innerHTML;
	}
	if (cells[1].innerHTML == cells[4].innerHTML && 
		cells[1].innerHTML == cells[7].innerHTML &&
		cells[1].innerHTML !== "") {
		colorBackground(cells[1]);
		colorBackground(cells[4]);
		colorBackground(cells[7]);
		gameOver = true;
		return cells[1].innerHTML;
	}
	if (cells[2].innerHTML == cells[5].innerHTML && 
		cells[2].innerHTML == cells[8].innerHTML &&
		cells[2].innerHTML !== "") {
		colorBackground(cells[2]);
		colorBackground(cells[5]);
		colorBackground(cells[8]);
		gameOver = true;
		return cells[2].innerHTML;
	}
	if (cells[0].innerHTML == cells[4].innerHTML && //Diagonal
		cells[0].innerHTML == cells[8].innerHTML &&
		cells[0].innerHTML !== "") {
		colorBackground(cells[0]);
		colorBackground(cells[4]);
		colorBackground(cells[8]);
		gameOver = true;
		return cells[0].innerHTML;
	}
	if (cells[2].innerHTML == cells[4].innerHTML && 
		cells[2].innerHTML == cells[6].innerHTML &&
		cells[2].innerHTML !== "") {
		colorBackground(cells[2]);
		colorBackground(cells[4]);
		colorBackground(cells[6]);
		gameOver = true;
		return cells[2].innerHTML;
	}
	return false;
}


function checkForDraw(){
	var filledCells = 0;
	for (var i = 0; i < cells.length; i++) {
		if (cells[i].innerHTML == "X" || cells[i].innerHTML == "O") {
			filledCells++;
		}
		if (filledCells == cells.length) {
			gameOver = true;
			return "draw";
		}
	}
}


function colorBackground(currentCell){
	currentCell.style.background = "green";
}


function playAgainPopUp(){
	 var playAgain = setTimeout(function(){
				var Ok = confirm("Do you Wanna play Again?");
					if 	(Ok == true){
						restartGame();
					}
			},1000);
}
  

function restartGame() {
	for (var i = 0; i < cells.length; i++) {
	  cells[i].innerHTML = "";
	  cells[i].style.backgroundColor = "white";
	}
	viewMessages("Lets Start the Game!");
	currentPlayer= "X";
	gameOver = false;
}