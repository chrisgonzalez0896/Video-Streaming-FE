const socket = io();

socket.on('connect', () => {
  console.log('Connected to server from video.html');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});