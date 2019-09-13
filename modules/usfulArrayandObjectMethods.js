
//------ FILTER --------
//const studentsAge = [17, 16, 18, 19, 21, 17];
function ableToDrink(arr) {
  return arr.filter(ag => age > 18)
}
// will be equal to [19, 21]

// ----- MAP -----
//const numbers = [2, 3, 4, 5];
function dollars(arr) {
  return arr.map( number => '$' + number)
}
// dollars will be equal to ['$2', '$3', '$4', '$5']


// ------ REDUCE -----
//const numbers = [5, 10, 15];
function sumNum(arr){
  let total = arr.reduce((total, nextVal) => total + nextVal)
  return total
}
// total will be equal to 30


// ----- FOR EACH -----
const emotions = ['happy', 'sad', 'angry'];
//emotions.forEach( emotion => console.log(emotion) );
function onEachItem(arr) {
  return arr.forEach(item => console.log(item))
}
