`use strict`;

/*
Coding Challenge #1

Array of forecasted maxium temperatures in degrees Celsius:
The thermometer displays a string with these temperatures.

Example:17 celsius in 1 days

Create a function 'printForecast' which takes in an
array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the 
problem and break it up into sub-problems.

TEST DATA1: [17, 21, 23]
TEST DATA2: [12, 5, -5, 0, 4]

TODO
1) Understand the problem
    transform the array into a string separated by ...
    What is X days? day=(arr[x+1])

2) Break it down into sub-problems
    transform the array into a string with °C
    
*/

const temperatures = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (argument) {
  let str = "";
  for (let i = 0; i < argument.length; i++) {
    str += `${argument[i]}°C in ${i + 1} days ... `;
    // console.log(`${argument[i]}°C celsius in ${i + 1} days`);
  }
  console.log("... " + str);
};

// printForecast(temperatures);
printForecast(data2);
