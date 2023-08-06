const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let num = 0;
	array.forEach(arrnum => {
    num += arrnum;
  });
  return num;
};

const multiply = function(array) {
  let num = 1;
	array.forEach(arrnum => {
    num = num * arrnum;
  });
  return num;
};

const power = function(num1, num2) {
  let num = num1;
	for (let i = 1; i < num2; i++) {
    num = num * num1;
  }
  return num;
};

const factorial = function(factorial) {
	if (factorial === 0) {
    return 1;
  }
  let ans = 1;
  for (let i = factorial; i > 0; i--) {
    ans = ans * i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
