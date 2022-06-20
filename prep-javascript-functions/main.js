/* eslint-disable no-redeclare */
function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('', sum);

function converthourstominutes(hours) {
  return hours * 60;
}
var minutes = converthourstominutes(2);
console.log('', minutes);

function getgreeting(x) {
  return x;
}
var Hello = getgreeting('world');
console.log('hello', Hello);

function addandmultipleby5(x, y) {
  return (x + y) * 5;
}
var sum = addandmultipleby5(10, 5);
console.log('', sum);

function multipleanddivideby5(x, y) {
  return (x * y) / 5;
}
var sum = multipleanddivideby5(35, 10);
console.log('', sum);

function substracttwonumbers(x, y) {
  return x - y;
}
var sum = substracttwonumbers(22, 7);
console.log('', sum);

function getcirclecircumference(x) {
  return 2 * Math.PI * x;
}
var sum = getcirclecircumference(5);
console.log('', sum);

function getfullname(x, y) {
  return x + ' ' + y;
}
var sum = getfullname('thanh', 'le');
console.log('', sum);

function cube(x) {
  return x * x * x;
}
var sum = cube(5);
console.log('', sum);
