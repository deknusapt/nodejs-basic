// variable import
const { EventEmitter } = require('events');
const myEvent = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}

myEvent.on('birthday', birthdayEventListener);
myEvent.emit('birthday', 'Tutik');

