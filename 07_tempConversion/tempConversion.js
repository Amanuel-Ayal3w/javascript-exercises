const convertToCelsius = function(fahrenheit) {

  const convertToCelsius = (5/9) * (fahrenheit - 32 )

  const rounded = Math.round(convertToCelsius*10)/10

  return rounded



};

const convertToFahrenheit = function(celsius) {

  const convertToFahrenheit = ((9/5)*celsius) + 32 ;

  const rounded = Math.round(convertToFahrenheit*10)/10;

  return rounded;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
