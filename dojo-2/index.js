// const print = require('print');

// String interpolation
const hotmartDev = {
  age: 27,
  id: 10,
  name: 'Leo'
};
const stringToBeRegexed = 'At the end of January, Carnegie Mellon computer scientists achieved a major milestone: their algorithm, Libratus, beat a set of professional poker players in a 120,000-hand tournament. While humans have fallen to computers in a variety of games, notably chess and go, poker is fundamentally different, in that each player has information that is not available to the rest. A fundamentally different sort of AI is required to deal with this sort of imperfect information.'

const es5 = {
  dynamicIdUrl: 'http://localhost:3000/users/' + hotmartDev.id,
  greet: function() {
    return 'Hello, my name is ' + hotmartDev.name + ' and I\'m ' + hotmartDev.age + '.';
  },
  multiLine: "We know that somewhere far north of here\n\t" +
  "the two rivers Ba and Ab converge to form\n\t" +
  "this greater stream that sustains us, uniting\n\t" +
  "the lifeblood length of our lands: and we believe\n\t" +
  "that the Ba's source is heaven, the Ab's hell.\
   - That's it!!!",
  numbers: {
    binary: 'Not possible to represent in ES5',
    decimal: 73,
    octal: 'Not possible to represent in ES5',
    hexadecimal: 0x49
  }
};
// more on es5 Numbers: http://speakingjs.com/es5/ch11.html

const es6 = {
  dynamicIdUrl: `http://localhost:3000/users/${hotmartDev.id}`,
  greet: () => `Hello, my name is ${hotmartDev.name.toUpperCase()} and I'm ${hotmartDev.age - 7}.`,
  multiLine: `We know that somewhere far north of here
  the two rivers Ba and Ab converge to form
  this greater stream that sustains us, uniting
  the lifeblood length of our lands: and we believe
  that the Ba's source is heaven, the Ab's hell.`,
  numbers: {
    binary: 0b1001001,
    decimal: 73,
    octal: 0o111,
    hexadecimal: 0x49
  }
}
// more on es6 Numbers: http://exploringjs.com/es6/ch_numbers.html

// Scoping
const extractNumbers = (text) => {
  // code a regex to extract an array of numbers from the stringToBeRegexed variable;
};

// Arrow functions
