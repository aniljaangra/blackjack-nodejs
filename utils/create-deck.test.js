const createDeck = require("./create-deck")

describe('createDeck' , ()=>{
    it('should return deck of 52 cards' , ()=>{
        expect(createDeck().length).toBe(52);
    })
})