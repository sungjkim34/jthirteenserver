const CARD_SUITS = [
    'Spades',
    'Clubs',
    'Diamonds',
    'Hearts'
];
const CARD_RANKS = [
    'Ace',
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    'Jack',
    'Queen',
    'King'
];
const CARDS = [
    {
        suit: 'Spades',
        rank: '3',
        value: 1,
        trueValue: 1,
        firstCardValue: 1
    },
    {
        suit: 'Spades',
        rank: '4',
        value: 2,
        trueValue: 2,
        firstCardValue: 5
    },
    {
        suit: 'Spades',
        rank: '5',
        value: 3,
        trueValue: 3,
        firstCardValue: 9
    },
    {
        suit: 'Spades',
        rank: '6',
        value: 4,
        trueValue: 4,
        firstCardValue: 13
    },
    {
        suit: 'Spades',
        rank: '7',
        value: 5,
        trueValue: 5,
        firstCardValue: 17
    },
    {
        suit: 'Spades',
        rank: '8',
        value: 6,
        trueValue: 6,
        firstCardValue: 21
    },
    {
        suit: 'Spades',
        rank: '9',
        value: 7,
        trueValue: 7,
        firstCardValue: 25
    },
    {
        suit: 'Spades',
        rank: '10',
        value: 8,
        trueValue: 8,
        firstCardValue: 30
    },
    {
        suit: 'Spades',
        rank: 'Jack',
        value: 9,
        trueValue: 9,
        firstCardValue: 33
    },
    {
        suit: 'Spades',
        rank: 'Queen',
        value: 10,
        trueValue: 10,
        firstCardValue: 37
    },
    {
        suit: 'Spades',
        rank: 'King',
        value: 11,
        trueValue: 11,
        firstCardValue: 41
    },
    {
        suit: 'Spades',
        rank: 'Ace',
        value: 12,
        trueValue: 12,
        firstCardValue: 45
    },
    {
        suit: 'Spades',
        rank: '2',
        value: 13,
        trueValue: 13,
        firstCardValue: 49
    },
    {
        suit: 'Clubs',
        rank: '3',
        value: 1,
        trueValue: 14,
        firstCardValue: 2
    },
    {
        suit: 'Clubs',
        rank: '4',
        value: 2,
        trueValue: 15,
        firstCardValue: 6
    },
    {
        suit: 'Clubs',
        rank: '5',
        value: 3,
        trueValue: 16,
        firstCardValue: 10
    },
    {
        suit: 'Clubs',
        rank: '6',
        value: 4,
        trueValue: 17,
        firstCardValue: 14
    },
    {
        suit: 'Clubs',
        rank: '7',
        value: 5,
        trueValue: 18,
        firstCardValue: 18
    },
    {
        suit: 'Clubs',
        rank: '8',
        value: 6,
        trueValue: 19,
        firstCardValue: 22
    },
    {
        suit: 'Clubs',
        rank: '9',
        value: 7,
        trueValue: 20,
        firstCardValue: 26
    },
    {
        suit: 'Clubs',
        rank: '10',
        value: 8,
        trueValue: 21,
        firstCardValue: 31
    },
    {
        suit: 'Clubs',
        rank: 'Jack',
        value: 9,
        trueValue: 22,
        firstCardValue: 34
    },
    {
        suit: 'Clubs',
        rank: 'Queen',
        value: 10,
        trueValue: 23,
        firstCardValue: 38
    },
    {
        suit: 'Clubs',
        rank: 'King',
        value: 11,
        trueValue: 24,
        firstCardValue: 42
    },
    {
        suit: 'Clubs',
        rank: 'Ace',
        value: 12,
        trueValue: 25,
        firstCardValue: 46
    },
    {
        suit: 'Clubs',
        rank: '2',
        value: 13,
        trueValue: 26,
        firstCardValue: 50
    },
    {
        suit: 'Diamonds',
        rank: '3',
        value: 1,
        trueValue: 27,
        firstCardValue: 3
    },
    {
        suit: 'Diamonds',
        rank: '4',
        value: 2,
        trueValue: 28,
        firstCardValue: 7
    },
    {
        suit: 'Diamonds',
        rank: '5',
        value: 3,
        trueValue: 29,
        firstCardValue: 11
    },
    {
        suit: 'Diamonds',
        rank: '6',
        value: 4,
        trueValue: 30,
        firstCardValue: 15
    },
    {
        suit: 'Diamonds',
        rank: '7',
        value: 5,
        trueValue: 31,
        firstCardValue: 19
    },
    {
        suit: 'Diamonds',
        rank: '8',
        value: 6,
        trueValue: 32,
        firstCardValue: 23
    },
    {
        suit: 'Diamonds',
        rank: '9',
        value: 7,
        trueValue: 33,
        firstCardValue: 27
    },
    {
        suit: 'Diamonds',
        rank: '10',
        value: 8,
        trueValue: 34,
        firstCardValue: 32
    },
    {
        suit: 'Diamonds',
        rank: 'Jack',
        value: 9,
        trueValue: 35,
        firstCardValue: 35
    },
    {
        suit: 'Diamonds',
        rank: 'Queen',
        value: 10,
        trueValue: 36,
        firstCardValue: 39
    },
    {
        suit: 'Diamonds',
        rank: 'King',
        value: 11,
        trueValue: 37,
        firstCardValue: 43
    },
    {
        suit: 'Diamonds',
        rank: 'Ace',
        value: 12,
        trueValue: 38,
        firstCardValue: 47
    },
    {
        suit: 'Diamonds',
        rank: '2',
        value: 13,
        trueValue: 39,
        firstCardValue: 51
    },
    {
        suit: 'Hearts',
        rank: '3',
        value: 1,
        trueValue: 40,
        firstCardValue: 4
    },
    {
        suit: 'Hearts',
        rank: '4',
        value: 2,
        trueValue: 41,
        firstCardValue: 8
    },
    {
        suit: 'Hearts',
        rank: '5',
        value: 3,
        trueValue: 42,
        firstCardValue: 12
    },
    {
        suit: 'Hearts',
        rank: '6',
        value: 4,
        trueValue: 43,
        firstCardValue: 16
    },
    {
        suit: 'Hearts',
        rank: '7',
        value: 5,
        trueValue: 44,
        firstCardValue: 20
    },
    {
        suit: 'Hearts',
        rank: '8',
        value: 6,
        trueValue: 45,
        firstCardValue: 24
    },
    {
        suit: 'Hearts',
        rank: '9',
        value: 7,
        trueValue: 46,
        firstCardValue: 28
    },
    {
        suit: 'Hearts',
        rank: '10',
        value: 8,
        trueValue: 47,
        firstCardValue: 29
    },
    {
        suit: 'Hearts',
        rank: 'Jack',
        value: 9,
        trueValue: 48,
        firstCardValue: 36
    },
    {
        suit: 'Hearts',
        rank: 'Queen',
        value: 10,
        trueValue: 49,
        firstCardValue: 40
    },
    {
        suit: 'Hearts',
        rank: 'King',
        value: 11,
        trueValue: 50,
        firstCardValue: 44
    },
    {
        suit: 'Hearts',
        rank: 'Ace',
        value: 12,
        trueValue: 51,
        firstCardValue: 48
    },
    {
        suit: 'Hearts',
        rank: '2',
        value: 13,
        trueValue: 52,
        firstCardValue: 52
    }
];

module.exports = CARDS;