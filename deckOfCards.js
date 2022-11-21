const suit = ['spades', 'hearts', 'clubs', 'diamonds'];
const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];


let deckOfCards = {};
let cards = [];

function deck(){
    for (let i = 0 ; i < suit.length ; i++){
        for (let j = 0 ; j < value.length ; j++){
            let obj = {};
            obj.suit = suit[i];
            obj.value = value[j];
            cards.push(obj);
        }
    }
    return cards;
}

function shuffle(){
    for (let k = (cards.length - 1) ; k >=0 ; k--){
        let l = Math.floor(Math.random() * (cards.length - 1))
        let temp = cards[k];
        cards[k] = cards[l];
        cards[l] = temp;
    }
    return cards;
}

deck();
console.log(shuffle());