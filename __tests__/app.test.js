'use strict';


describe('lab 18 testing', () => {
  it('can pass a test', () => {
    expect('true').toBeTruthy();
  });
});

// describe('app', () => {
//   it('connect to client response', (done) => {
//     expect.assertions(1);

//     const ioConnect = new Connection(`ws://localhost:${port}`)
//       .on('message', (msg) => {
//         expect(JSON.parse(msg).id).toEqual(0);
//         ws.close();
//       })
//       .on('close', () => done());
//   });
// });
