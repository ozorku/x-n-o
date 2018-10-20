//Switch Player Turn between Player X and player O
playerTurn = [];
var playerX = playerTurn.x = 'X';
var playerO = playerTurn.o = 'O';

//first player is player X by default
var currentPlayer = playerX;

//clear game 
function cleargame() {
	window.history.go(0);
}

//Game play
$(document).ready(function() {
	//When a cell is clicked, this fetches its cellID
	//each cell has a default cellID; cell1, cell2, ...cell9
	$('.cell').on('click', function() {
		//get id attribute of cell clicked and store
		//in variable 'c_clicked' to be used later in the game
		var c_clicked = $(this).attr('id');
		//Here is an imporant action in the game.
		//
		if(c_clicked) {
			//ACTIONS PERFOREMED WHEN A CELL IS TRIGGERED
			/*
				Here, we perform actions of inserting letters played,
				checking and switch players, updating scores etc.

				Also we check the winning patterns to decide who wins

				//////////////////////////////////////////////////

				We could use conditional statements here but that would
				be confusing isnt it?

				So we create a function instead to handle the requests
			*/
			function letter_played(letter, nextPlayer) {
			//
			
				//Retrieve the letter played X || O
				$("#"+c_clicked + " > .text").css('background', '#fff').text(letter);
				//ensure button cannot be selected again by removng cell id attr and replacing with cell class attr
				$("#"+c_clicked).removeAttr('id', c_clicked).attr('class', 'cell '+c_clicked);
				//switch to next player
				currentPlayer = nextPlayer;
				$('.player').text("Player " + currentPlayer + "'s Turn");
			}
			//This checks the current player and letter played
			//It also switches to next player
			if(currentPlayer == playerX) {
				get_letter_played = 'X';
				setNextPlayer = 'O'
			} else {
				get_letter_played = 'O';
				setNextPlayer = 'X'
			}
			letter_played(get_letter_played, setNextPlayer)


			//CHECK FOR WINNER WINNER
			/*get letter played in each cell*/
			var c1_txt = $(".1 > .text").text();
			var c2_txt = $(".2 > .text").text();
			var c3_txt = $(".3 > .text").text();
			var c4_txt = $(".4 > .text").text();
			var c5_txt = $(".5 > .text").text();
			var c6_txt = $(".6 > .text").text();
			var c7_txt = $(".7 > .text").text();
			var c8_txt = $(".8 > .text").text();
			var c9_txt = $(".9 > .text").text();


			function message() {
				alert("this Player " + get_letter_played + " won");
				window.history.go(0);
			}

			if(
				(
					//ALL HORIZONTAL ROWS CHECK
					(c1_txt == get_letter_played && c2_txt == get_letter_played 
						&& c3_txt == get_letter_played)
					||
					(c4_txt == get_letter_played && c5_txt  == get_letter_played 
				 		&& c6_txt  == get_letter_played)
					||
					(c7_txt == get_letter_played && c8_txt == get_letter_played 
						&& c9_txt == get_letter_played)
				)
				||
				(
					//ALL VERTICAL
					(c1_txt == get_letter_played && c4_txt == get_letter_played 
						&& c7_txt == get_letter_played)
					||
					(c2_txt == get_letter_played && c5_txt == get_letter_played 
						&& c8_txt == get_letter_played)
					||
					(c3_txt == get_letter_played && c6_txt == get_letter_played 
						&& c9_txt == get_letter_played)
				)
				||
				(
					//SLANT FROM TOP RIGHT TO BOTTOM LEFT
					(c3_txt == get_letter_played && c5_txt == get_letter_played 
						&& c7_txt == get_letter_played)
				)
				||
				(
					//SLANT FROM TOP LEFT TO BOTTOM RIGHT
					(c1_txt == get_letter_played && c5_txt == get_letter_played 
						&& c9_txt == get_letter_played)
				)
			)
			{ message(); }
			else {
				//
			}
		}
	})
})
