function dealCards(cards, n) {
  const hand = [];
  for (let pop = 0; pop < n; pop++) {
    hand.push(cards.pop());
  }
  return hand;
}

module.exports = dealCards;
