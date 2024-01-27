

function computeScore(cardsInHand){
    const isAce = number => number[0] == "A";
    const aces = cardsInHand.reduce( (total , curr) => {
        if(isAce(curr)) return total++;
        return total;
    },0);
    
    const totalNumbers = cardsInHand.reduce( (total , curr) => {
        if(isAce(curr)) return total;
        if(['K','Q','J'].includes(curr[0])){
            return total+10;
        }
        return total+parseInt(curr[0]);
    },0);


}