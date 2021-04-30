// Write one Javascript statement on the indicated line that will 
// make the printed number always be between 10 and 20.

let x = 2;
let y = 8;
const a = function(b) {
  return function(c) {
    return x + y + Math.abs(b) + c;
  }; 
};

// ***** Statement will go here *****

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));
