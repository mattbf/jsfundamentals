//declaring arrays
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];

//access and modify
shopping[0]
shopping[0] = 'tahini';

//inisde multidimensional array
random[2][2];

//loop over arrays
let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

//make array out of string values separated by commas
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray;

//go back
let myNewString = myArray.join(',');
myNewString;
//or
var array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());

//add item to end of array1
let newLength = myArray.push('Bristol');
myArray;
newLength;
//remove last item
myArray.pop();

//unshift() and shift()  are the exact same except on the beginnign of array
