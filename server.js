'use strict';

const io = require('socket.io')(3000);

io.on('connection', ( socket ) => {
  console.log('CONNECTED!', socket.id);

  //Setup rooms for students/teacher clients to listen and respond to
  const room = io.of('/room');

  room.on('connection', (socket) => {
    console.log('CLASSROOM', socket.id);

    socket.on('assignment', (payload) => {
      room.emit('assignment', payload);
    });
    socket.on('graded', (payload) => {
      room.emit('graded', payload);
    });
  });
    
});