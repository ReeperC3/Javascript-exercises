const sumAll = function(start, end) {
  let num = 0;
  if (start < 0 || !Number.isInteger(start) || !Number.isInteger(end) || end < 0) {
    return "ERROR"
  } 
  if (end < start) {
    let temp = start;
    start = end;
    end = temp;
  }
  
  for (let i = start; i <= end; i++) {
    num += i;
  }
  
  return num;
  
};

// Do not edit below this line
module.exports = sumAll;
