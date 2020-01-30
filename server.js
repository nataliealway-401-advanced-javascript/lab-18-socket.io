'use strict';

const io = require('socket.io')(3000);

io.on('connection', ( socket ) => {
  console.log('CONNECTED!', socket.id);

  //Setup rooms for students/teacher clients to listen and respond to
  const room = io.of('/room');

  room.on('connection', (socket) => {
    console.log('CLASSROOM', socket.id);

    socket.on('join', room => {
      console.log('joined', room);
      socket.join(room);
    });
   
    socket.on('assignment', (payload) => {
      room.to('teacher').emit('assignment', payload);
    });
    socket.on('graded', (payload) => {
      room.to('student').emit('graded', payload);
    });
  });
});
    