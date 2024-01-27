const createDeck = require("./create-deck");
const shuffleDeck = require("./shuffle-deck");

describe("shuffleDeck", () => {
  it("should return shuffled deck of cards", () => {
    const cards = createDeck();
    const shuffledCards = shuffleDeck(cards);
    const allEqual = cards.every((card, idx) => card === shuffledCards[idx]);
    expect(allEqual).toBeFalsy();
  });
});
