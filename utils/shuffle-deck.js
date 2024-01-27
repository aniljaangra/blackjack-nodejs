const createDeck = require("./create-deck");
function shuffleDeck(deck) {
  const newDeck = [...deck];
  for (let idx = deck.length - 1; idx >= 0; idx--) {
    const random = Math.floor(Math.random() * idx);
    [newDeck[random], newDeck[idx]] = [newDeck[idx], newDeck[random]];
  }
  return newDeck;
}

module.exports = shuffleDeck;
