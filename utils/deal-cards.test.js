const createDeck = require("./create-deck");
const shuffleDeck = require("./shuffle-deck");
const dealCards = require("./deal-cards");

describe("dealNCards", () => {
  it("should return N items from top of the card", () => {
    const cards = createDeck();
    const cardsToDeal = 2;
    expect(dealCards(cards, cardsToDeal).length).toBe(cardsToDeal);
  });

  it("should remove N items from top of the deck", () => {
    const cards = createDeck();
    const cardsToDeal = 2;
    const originalLenth = cards.length;
    dealCards(cards, cardsToDeal);
    expect(cards.length).toBe(originalLenth - cardsToDeal);
  });
});
