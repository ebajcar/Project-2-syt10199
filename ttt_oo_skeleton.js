/* 
Author: Ellen Bajcar
Program: ttt_oo_skeleton.js
Date: Summer 2016
Date Updated: 8:25 AM June-09-16
Version: 5.0 (Week 5 stage)
Purpose: learning Javascript programming
Copyright: 
    This work is the intellectual property of Sheridan College. 
    Any further copying and distribution outside of class must be within 
    the copyright law. Posting to commercial sites for profit is prohibited.
Description:
   object-oriented approach for tic tac toe game
   
  class diagram:
   
           +------------------------+
           | Game                   |
           +------------------------+
           | player: string         |
           | winSets: 2D array      |
           | empty: number          |
           | gameOver: boolean      |
           | board: HTML collection |
           +------------------------+
           | checkWinner(): void    | 
           | displayWinner(): void  |
           | cellClick(curr): void  |
           | resetGame(): void      |
           | createBoard(): void    |
           | removeBoard(): void    |
           +------------------------+
*/

var Game = function () {
	this.player = "X";
	this.winSets = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
			[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
	this.empty = 9;
	this.gameover = false;
	this.board = document.getElementsByTagName("td");

  this.checkWinner = function() {
  };

  this.displayWinner = function() {		
  };

  this.cellClick = function(curr) {	  
  };

  this.resetGame = function() {   
  };

  this.createBoard = function() {   
  };
	
  this.removeBoard = function() {    
  };	
}
/*
 *	main set up board, start game, set up event listeners
 */
function playTicTac() {
	// create the game object
	var curGame = new Game();
	// initialize the playing board
	curGame.createBoard();
	// initialize the event listeners
	document.getElementById("reset").addEventListener("click", function() {
			curGame.resetGame();
		});
	for (var i = 0; i < curGame.board.length; i++) 
		curGame.board[i].addEventListener("click", function() {
			curGame.cellClick(this);
		});
	document.getElementById("help").onclick = function() {
	  document.getElementById("dialog0").setAttribute("open", "open");
	}
	document.getElementById("close").onclick = function() {
		document.getElementById("dialog0").removeAttribute("open");
	}	
}

document.addEventListener("DOMContentLoaded", playTicTac);
// the end
