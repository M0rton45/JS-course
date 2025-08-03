`use strict`;
// TODO/BUG/FIX
// Problem 1
// Given an array of temperature of one day
// Smart home temperature sensor data
// Calculate the amplitude
// Can be a sensor error in the data

const temperatur = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// what is the amplitude?
// amplitude = max temperature - min temperature
// How to compute max and min temperature?
// What if the data contains errors?

// 2) Break it down
// Need to ignore errors
// Find max temperature in temperature array
// Find min temperature in temperature array
// Subtract min from max (applitude) and return it

//console.log(typeof temperatur[4]); checking the type
const calcTempAmplitude = function (temperatur) {
  let max = temperatur[0];
  let min = temperatur[0];
  let amplitude = 0;
  for (let i = 0; i < temperatur.length; i++) {
    const dataTemp = temperatur[i];
    if (typeof dataTemp !== 'number') continue;
    //continue is skipping the rest of the operation
    if (dataTemp > max) max = dataTemp;
    if (dataTemp < min) min = dataTemp;
  }
  amplitude = max - min;
  console.log(`Max: ${max}, Min: ${min}, Amplitude: ${amplitude}`);
};
calcTempAmplitude(temperatur);

//Problem 2
// Function should now receive two arrays of temperatures

// 1) Understand the problem
// Two arrays of temperatures
// Merge the two arrays

// 2) Break it down
// Merge two arrays?
// Comend array1.concat(array2)
// It's to merge two arrays

const calcTempAmplitudeTwoArrays = function (t1, t2) {
  const temperatur = t1.concat(t2);
  console.log(temperatur);

  let max = 0;
  let min = 0;
  // Identify the BUG by debuging breakpoints method
  // Find the BUG
  // If min temperature is not lower or equal to 0 it's gonna to bug
  // FIX the BUG
  // TODO Need to chamge valie of min and max too
  // debuggger; Is useful to stop the code at this point and check the values
  let amplitude = 0;
  for (let i = 0; i < temperatur.length; i++) {
    const dataTemp = temperatur[i];
    if (typeof dataTemp !== 'number') continue;
    //continue is skipping the rest of the operation
    if (dataTemp > max) max = dataTemp;
    if (dataTemp < min) min = dataTemp;
  }
  amplitude = max - min;
  console.log(`Max: ${max}, Min: ${min}, Amplitude: ${amplitude}`);
};
calcTempAmplitudeTwoArrays([3, 5, 1], [9, 2, 5]);

//Debugging
// 1) Identify the bug (by testing and something goes wrong)
// 2) Find the bug(isolate the part of the code which have the bug)
// 3) Fix the bug (replace the new soloution with the old one)
// 4) Prevent (serach in code for similar bugs)

//Convert the temperature from Celsius to kelvin
const mesureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: 10,
    //value: Number(prompt('Degrees celsius:')), // Convert the string to a number to solve the bug,
  };
  console.log(measurement.value);
  console.table(measurement); // more readable output

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(mesureKelvin());
// 1) Identify the bug (wrong result)
// 2) Locate the bug in the code (use console.log to locate the cause like type of the variable)
// 3) Fix the bug (convert the string to number)

//Breakpoints
// In sources at the browser you can set breakpoints
// By clicking on the line number (red dot will appear and the code will stop there)
