// const fs = require('fs');

// //fs.writeFileSync('Note.txt','Welcome to node js');  // This will create one file and write in that 
// //fs.writeFileSync('Note.txt','Hi How are you');  // This will update existing file 

// //
// // Challenge : Append a messeage in Note.txt
// //

// fs.appendFileSync('Note.txt' , 'Where are you');  // This will append the text in Note.txt


//---------X---------------X-------------X------------------------------------------------------------

// const fs = require('fs');
// //fs.writeFileSync('Note.txt','Welcome to node js');  // This will create one file and write in that 
// //fs.writeFileSync('Note.txt','Hi How are you');  // This will update existing file 
// //
// // Challenge : Append a messeage in Note.txt
// //
// fs.appendFileSync('Note.txt' , 'Where are you');  // This will append the text in Note.txt

//---------X---------------X-------------X------------------------------------------------------------

const printNotes =require('./Notes');

console.log(printNotes());
