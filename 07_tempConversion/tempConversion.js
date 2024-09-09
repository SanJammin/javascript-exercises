const convertToCelsius = function(fahrenheitTemp) {
  let newTempCelsius = ((fahrenheitTemp-32)*5)/9;

  return Math.round(newTempCelsius*10)/10;
};

const convertToFahrenheit = function(celsiusTemp) {
  let newTempFahrenheit = (celsiusTemp*1.8)+32;

  return Math.round(newTempFahrenheit *10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
