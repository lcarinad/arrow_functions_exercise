//ES MAP CALLBACK
const double = (arr) => arr.map((val) => val * 2);
// another option: arr.map(val => val * 2);

const squaresAndEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
// const evens = squares.filter((square) => square % 2 === 0);
// numbers.map((num) => num ** 2)=>num.filter(squares)=>squares%2===0;
