
// Assignment: Deck of Cards
// Create a Card class. A card should have the following functionality:

// Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// Each Card should have a numerical value (1-13)
// Each Card should have a show method (log the card's information to the console)


// Create a Deck class. A deck should have the following functionality:
// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random Card

// Deal should return the Card that was dealt and remove it from the Deck
// Now create a Player class. A Player should have the following functionality:

// The Player should have a name
// The Player should have a hand (an array of cards taken from a Deck)
// The Player should be able to take a Card (use the deck.deal method)
// The Player should be able to discard a Card


class Card {

    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.ranks = { 1: 'Ace', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', 11: 'Jack', 12: 'Queen', 13: 'King', };
        this.suits = { 'c': 'Clubs', 'd': 'Diamonds', 'h': 'Hearts', 's': 'Spades' };

        if (this.rank in this.ranks && this.suit in this.suits) {
            //console.log(this.ranks[this.rank], this.suits[this.suit]);
            return true;
        }
        else {
            console.log("wrong rank or suit!");
            return false;
        }
    }
    getRank() {
        return this.ranks[this.rank];
    }
    getSuit() {
        return this.suits[this.suit];
    }
    getbjvalue(){
        return this.ranks[11];
    }
}

class Deck {
    constructor(){
        this.deck = [];
        this.reset();
        this.shuffle();
      }

      reset(){
        
        //this.deck = [];
        const suits = ['c', 'd', 'h', 's'];
        const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let suit in suits) {
            for (let rank in ranks) {             
                this.deck.push(new Card(ranks[rank], suits[suit]));
            }
        }

        //console.log(this.deck.length);
    }
    shuffle(){
        const deck = this.deck;
        //const { deck } = this;
        let m = deck.length, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }  
        return this;
      }

      deal(){
        return this.deck.pop();
        //return (mycard.getRank(), mycard.getSuit());
      }
      decksize(){
          return this.deck.length;
      }
}


class Player{
    constructor(name,deck){
        this.name = name;
        this.deck = deck;
        this.hand = [];
    }

    takeCard(){
        this.hand.push(this.deck.deal());
        return this;
    }

    discardCard(a,b){
        this.hand.splice(a,b);
        console.log("here");
        return this;
    }

    showHand(){
        let i = 0;
        for (i; i < this.hand.length; i++){
            console.log("Card on hand:", this.hand[i].getRank(), this.hand[i].getSuit());
        }
        return this;
    }
}

// const deck1 = new Deck();
// console.log("loging card from deck:", deck1.deck[0].getRank());
// console.log(deck1.deck.Card);


const deck1 = new Deck();
deck1.shuffle();
//console.log(deck1.deck.Card);

mycard = deck1.deal();
console.log("Card that was poped:",mycard.getRank(), mycard.getSuit());
console.log("Current Deck size: ",deck1.decksize());
console.log("BJ: ", mycard.getbjvalue());
//console.log(mycard.rank, mycard.suit);
//console.log(deck1.deck.Card);


//deck1.reset();

console.log("Current Deck size after Reset: ",deck1.decksize());

const p1 = new Player('vicky', deck1);

p1.takeCard();
p1.takeCard();
p1.takeCard();
p1.showHand();
p1.discardCard(0,1);
p1.showHand();


