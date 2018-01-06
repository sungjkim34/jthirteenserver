var socket = io();
let firstPlayer = false;

socket.on('firstPlayer', () => {
  console.log('you are the first player');
  firstPlayer = true;
  $('#startBtn').removeAttr('disabled');
});

socket.on('numberOfPlayersChanged', numOfPlayers => {
  console.log('numberOfPlayersChanged');
  $('#numOfPlayers').text(numOfPlayers);
});

socket.on('dealCards', cards => {
  console.log(cards);
});

$('#startBtn').click(() => {
  if(firstPlayer) {
    socket.emit('startGame');
  } else {
    console.log('error. you are not the room master');
  }
});