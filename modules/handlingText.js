//escape characters
let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;

//concatonate strings
let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
joined;

//convert to string
let myNum = 123;
let myString = myNum.toString();
typeof myString;

//find length
let string = 'mozilla';
string.length;
//receive specific character
browserType[0];
//Find subtring
browserType.indexOf('zilla'); // returns 2 - zilla starts at 0,1,2 of mozilla
//extract text
browserType.slice(0,3); // returns moz
//change case
let radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();
//update parts of string
browserType.replace('moz','van');
