const fibonacci = function(number) {
  let start = 0;
  let second = 1;
  let third = +number;
  for (let i = 2; i <= number; i++) {
    third = start + second;
    start = second;
    second = third;
  }
  if (number <= 0) {return 'OOPS';} else {return third;}
  
  
};

// Do not edit below this line
module.exports = fibonacci;
