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
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap');
body {
	background: #e0e0e0;
    font-family: 'Kaushan Script', cursive;
    margin: 0 auto;
    text-align: center;
}
main {
	width: 100%;
	margin: auto;
	padding-top: 4px;
	background-color: white;
	min-height: 380px;
	display: flex;
	justify-content: center;	
}
main > div {
  margin: 5px;
  padding: 5px;
}
header h1, dialog h2 {
	color: #6f6f6f;   
	text-shadow: 1px 1px cyan;
    font-size: 60px;
    font-weight: 400;
	margin: 16px 0 0;
    text-align: center;
}
dialog h2 {
	font-size: 40px;
}
dialog {
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
  background: #e0e0e0;
	padding: 3px;
    border: 1px solid gray;
    box-sizing: border-box;
    width: 50%;
}
dialog section {
	width: 100%;
	margin: 0;
	padding: 0;
	background-color: white;
        text-align: left;
padding: 3px;
        box-sizing: border-box;
        height: 300px;
        overflow-y: scroll;
        overflow-x: hidden;
}
dialog p {
  font-family: initial;
}


footer {
	margin: auto;
	padding-top: 10px;
	margin-top: 10px;
	text-align: center;
	color: gray;
	clear: both;
}

/* navigation */
nav {
    margin: 20px auto;
    width: 450px;
	text-align: center;
}
nav button {
  border: none;
}
nav a, nav span, nav button {
    background-color: #a4a4a4;
	color: #fff;
    display: inline-block;
	font-family: Lato, sans-serif;
    font-size: 15px;
    padding: 7px;
    text-decoration: none;
}
nav a.active, nav a:hover, nav span:hover, nav button:hover {
    background: #c2c2c2;
    color: #818181;
    cursor: pointer;
}



table {
    margin: 20px auto;
	background-color: transparent;
}

td {
    height: 50px;
    width: 50px;
    font-size: 2.2em;
    font-family: sans-serif;
    border: 1px solid #00CCCC;
	background-color: transparent;
}
td:nth-child(1) {
    border-left-style: none;
}
td:nth-child(3) {
    border-right-style: none;
}
tr:nth-child(1)>td {
    border-top-style: none;
}
tr:nth-child(3)>td {
    border-bottom-style: none;
}

/* overlay and popup messages styling */
#messg {        
    background-color: 	white; 
    background-repeat: 	no-repeat;
	background-size: 	100% 100%;
    border: 			1px solid white; 
    border-radius: 		3px;
    box-shadow: 		1px 1px 5px black, -1px -1px 5px white;
    display: 			block; 
    height: 			50%;
	left: 				50%;
    margin: 			auto; 
    padding: 			20px;
    position: 			fixed;
	text-align: 		center;
	top: 				50%;
	transform: 			translate(-50%, -50%);
    width: 				50%;        
    z-index: 			200;         
}	
#messg h2 {
    font-size: 3em;
    margin: .2em 0;
    color: #00CCCC;
    text-shadow: 1px 1px 1px #fff,2px 2px 6px #000;
}
#overlay { 
    background-color: 	rgba(20, 20, 20, 0.55); 
    display: 			none;
    height: 			100%;
    left: 				0; 
    position: 			fixed;  
    top: 				0; 
    width: 				100%;
    z-index: 			100;      
}
	</style>

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
