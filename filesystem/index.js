const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (error, notes) => {
  if (error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(notes);
}

const notes = fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);