var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

const CARDS = require('./assets/cards');

app.set('port', 3434);
app.use('/static', express.static(__dirname + '/static'));
app.get('/', (request, response) => response.sendFile(path.join(__dirname, 'index.html')));
server.listen(3434, () => console.log('Starting server on port 3434'));

io.on('connection', socket => {
  console.log('Number of players: ' +  Object.keys(io.sockets.sockets).length);
  io.emit('numberOfPlayersChanged', Object.keys(io.sockets.sockets).length);

  if(Object.keys(io.sockets.sockets).length === 1) {
    socket.emit('hostPlayer');
  }
  console.log(socket.id);

  socket.on('disconnect', socket => {
    console.log('Number of players: ' + Object.keys(io.sockets.sockets).length);
    io.emit('numberOfPlayersChanged', Object.keys(io.sockets.sockets).length);
    if(Object.keys(io.sockets.sockets).length === 1) {
      io.emit('hostPlayer');
    }
  });

  socket.on('startGame', socket => {
    const shuffledCards = shuffleCards(Object.assign([], CARDS));
    var listOfSockets = io.sockets.sockets;
    var firstPlayer = {
      socket: listOfSockets[0],
      lowestCard: 52
    };
    for(var socketId in listOfSockets) {
      console.log('dealing cards to : ' + listOfSockets[socketId].id);
      var cardsToDeal = dealCards();
      // Immutability. If you want players to start with sorted cards, don't reassign.
      var sortedDealedCards = Object.assign([], cardsToDeal).sort((a, b) => a.firstCardValue - b.firstCardValue);
      if(sortedDealedCards[0].firstCardValue < firstPlayer.lowestCard){
        firstPlayer = {
          socket: socketId,
          lowestCard: sortedDealedCards[0].firstCardValue
        }
      }
      listOfSockets[socketId].emit('dealCards', cardsToDeal);
    }
    console.log('firstPlayer: ' + firstPlayer.lowestCard);
    listOfSockets[firstPlayer.socket].emit('firstPlayer');
    function dealCards() {
      const playerDeck = [];
      for (let i = 0; i < 13; i++) {
        playerDeck.push(shuffledCards[0]);
        shuffledCards.splice(0, 1);
      }
      return playerDeck;
    }
    function shuffleCards(deck) {
      var currentIndex = deck.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
      }
      return deck;
    }
  });

  socket.on('playCards', cards => {
    console.log('cards played by: ' + socket.id);
    for(var i = 0; i < cards.length; i++) {
      console.log(cards[i].suit + ' ' + cards[i].rank);
    }

    var listOfSockets = io.sockets.sockets;
    for(var socketId in listOfSockets) {
      if(listOfSockets[socketId].id !== socket.id){
        console.log('emitting opponentPlayedCards to: ' + listOfSockets[socketId].id);
        listOfSockets[socketId].emit('opponentPlayedCards', cards);
      }
    }
  });

  socket.on('skipTurn', () => {
    console.log('player skipped turn: ' + socket.id);

    var listOfSockets = io.sockets.sockets;
    for(var socketId in listOfSockets) {
      if(listOfSockets[socketId].id !== socket.id){
        console.log('emitting skipTurn to: ' + listOfSockets[socketId].id);
        listOfSockets[socketId].emit('opponentSkippedTurn');
      }
    }
  });

  socket.on('playerWon', () => {
    console.log('player ' + socket.id + ' won the game!');
    var listOfSockets = io.sockets.sockets;
    for(var socketId in listOfSockets) {
      if(listOfSockets[socketId].id !== socket.id){
        console.log('emitting opponentPlayerWon to: ' + listOfSockets[socketId].id);
        listOfSockets[socketId].emit('opponentPlayerWon');
      }
    }
  });

  socket.on('sendMessage', (message, playerName, date) => {
    message = Object.assign({}, {socketId: socket.id, date, text: message, playerName: playerName.replace(/\s/g, '') ? playerName : socket.id});
    io.sockets.emit('sendMessage', message);
    console.log('player ' + message.socketId + ': ' + message.text);
  });

});