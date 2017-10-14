


var cards = ['queen','queen','king','king'];

var cardsInPlay = [];



var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		return "You found a match!";
	} else {
		return "Sorry, try again.";
	}
}

var flipCard = function(cardId) {



	cardsInPlay.push(cards[cardId]);

	console.log("User flipped " + cards[cardId]);
	
	if (cardsInPlay.length == 1) {
		return "Draw another card";
	}
	if (cardsInPlay.length == 2) {
	  return checkForMatch();
    } 


}

console.log(flipCard(0));
console.log(flipCard(3));





