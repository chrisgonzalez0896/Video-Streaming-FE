const socket = io();

socket.on('connect', () => {
  console.log('Connected to server from index.html');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});