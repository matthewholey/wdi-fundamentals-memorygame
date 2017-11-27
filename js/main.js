console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardOne = cards [0];
var cardTwo = cards [2];
var cardsInPlay = [];
	cardsInPlay.push("cardOne");
	console.log("User flipped " + cardOne);
	cardsInPlay.push("cardTwo");
	console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2) {
	console.log("2 Cards In Play");
} else if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[2]) {
	alert("Sorry, try again.");
}
//console.log("User flipped " + cardThree);
//console.log("User flipped " + cardFour);

/*var cardThree = "king";
var cardFour = "king";*/
