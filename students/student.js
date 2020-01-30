'use strict';

const io = require('socket.io-client');
const students = io.connect('http://localhost:3000/schoolRoom');

students.emit('join', 'students');

students.on('graded', payload => {
  console.log(payload, 'Graded');
});


const submit = () => {    
  let number = (Math.floor(Math.random() * 50));
  students.emit('submission', `Lab ${number}`);
};

module.exports = submit;