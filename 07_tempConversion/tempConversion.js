const convertToCelsius = function(fahrenheit) {
  fahrenheit = Math.round((fahrenheit - 32) * 5/9 * 10) / 10;
  return fahrenheit;
};

const convertToFahrenheit = function(celsius) {
  celsius = Math.round(((celsius * (9/5)) + 32) * 10) / 10;
  return celsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
