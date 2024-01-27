function createDeck() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "K",
    "Q",
    "J",
  ];
  const suites = ["S", "H", "C", "D"];

  return values.reduce((arr, value) => {
    suites.forEach((suite) => {
      arr.push(`${value}${suite}`);
    });
    return arr;
  }, []);
}
module.exports = createDeck;
