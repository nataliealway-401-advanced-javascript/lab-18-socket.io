'use strict';

const io = require('socket.io-client');

const studentRoom = io.connect('http://localhost:3000/room');

studentRoom.emit('join', 'student');

studentRoom.on('graded', (payload) => {
  console.log(payload, ': graded assignment');
});

const assignment = (number) => `lab ${number}`;

const submit = () => {
  let lab = assignment(Math.floor(Math.random() * 100));
  studentRoom.emit('submit', lab);
}



module.exports = submit;