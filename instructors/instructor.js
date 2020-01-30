'use strict';

const io = require('socket.io-client');
const instructors = io.connect('http://localhost:3000/schoolRoom');

instructors.emit('join', 'instructors');


/**
 * connections made once it connects on a submission from students
 * generates random number to  a lab score out of 10 points, and attaches it to a string
 */
instructors.on('submission', payload => {
  console.log(payload);
  let grade = Math.floor(Math.random() * 10);
  const graded = {
    assignment: payload,
    grade: `Grade: ${grade}`,
  };

  instructors.emit('graded', graded);
});