//CPEN 400A JavaScript Quiz Solutions
//Implement your solutions here

//Name:
//Student#:


//Question #1

// Returns the integer position of a search string in an
// array of strings if found. If the string is not found, the function returns -1. The string matches are
// case insensitive.
function caseInsensitiveStringSearch( strArr, str ) {
  // Receieve an array of strings and a search term
  // return the array position of the search term or -1 if not found

  //convert strArr to lowercase
  let lowerCaseArr = []
  for (i=0; i<strArr.length; i++) {
    lowerCaseArr.push(strArr[i].toLowerCase())
  }
  const searchTerm = str.toLowerCase()

  var position = lowerCaseArr.indexOf(searchTerm)
  return position

}

//Question #2

// Accepts an array of objects, consisting of two attributes: an
// integer user id and a string email address. Returns the array of objects with the email column
// lowercased. If the email column is missing, return a friendly error message instead.
function lowerCaseEmails( userEmails ) {
  //receive user objects
  //make emails lowercase
  //return error message if no email
  //return array
  // Input = [{userId: 1, email: “user1@gmail.com”}, {userId: 2, email: “User2@gmail.com”}]
  let newObject = []
  if (userEmails && userEmails.length > 0) {
    for (i=0; i<userEmails.length; i++) {
      if (userEmails[i].email) {
        var lcEmail = userEmails[i].email.toLowerCase()
        newObject.push({userId: userEmails[i].userId, email: lcEmail })
      } else {
        newObject = ['email is blank']
         return newObject
      }

    }
    return newObject
  } else{
    newObject = ['email is blank']
     return newObject
  }


}

//Question #3
function tenSortedIntegers() {
 //genrate 10 random intergers
 // sort in decedning order in an array
 var intArray = []

 for (i=0; i<10; i++) {
   intArray.push(Math.floor((Math.random() * 50) + 1))
 }

 function descendingOrder(a, b) {
  return a > b ? -1 : b > a ? 1 : 0;
 }

  intArray.sort(descendingOrder)
  return intArray

}

//Question #4
//Combines two arrays by alternatively taking elements. The two
// arrays can have different lengths.
function combineArrays( arrA, arrB ) {
  var realLength = arrA.length > arrB.length ? arrA.length : arrB.length
  var combArray = []

  for (i=0; i<realLength; i++) {
    if (arrA[i]) {
      combArray.push(arrA[i])
    }
    if (arrB[i]) {
      combArray.push(arrB[i])
    }
  }
  return combArray
}

//Question #5
function concatAllStringSubsets ( str ) {
  //receive string and split all characters into array
  // order in lexicoGraphical order
  // starting with the first char in lexoArray go down the first array and push each combination of the letter that come after
  //concatonate to a string
  // }
      const strArray = str.split('')
      let lexoArray = str.split('').sort((a, b) => a.localeCompare(b))
      var position = strArray.indexOf('f')
      let newArray = [lexoArray[0]]

      for (i=0; i<strArray.length; i++) {
          let firstLetter = lexoArray[i]
          let afterString = strArray.slice(i + 1).join('')
          newArray.push(firstLetter + afterString)
      }

      let finalStr = newArray.join('')

      return finalStr

      //V2
//       if (str != "" || " ") {
// const strArray = str.split('')
// //console.log(strArray)
// let lexoArray = str.split('').sort((a, b) => a.localeCompare(b))
// //console.log(lexoArray)
// //console.log(strArray)
//
// var position = strArray.indexOf('f')
// //console.log(position)
// let newArray = [lexoArray[0]]
// //console.log(newArray)
// for (i=0; i<strArray.length; i++) {
//     let firstLetter = lexoArray[i]
//     let afterString = strArray.slice(i + 1).join('')
//     console.log("i: " + i + " letter: " + firstLetter)
//     //console.log("afterstring: " + afterString)
//     if (afterString == null || "" || undefined || " ") {
//         i++
//     } else {
//         newArray.push(firstLetter + afterString)
//     }
//
// }
// //console.log(newArray)
// let finalStr = newArray.join('')
// console.log('answer ' + finalStr)
// } else return ""

// v3

// let str = 'gaf'
//     if (str != "" || " ") {
//     const strArray = str.split('')
//     //console.log(strArray)
//     let lexoArray = str.split('').sort((a, b) => a.localeCompare(b))
//     //console.log(lexoArray)
//     //console.log(strArray)
//
//     var position = strArray.indexOf('f')
//     //console.log(position)
//     let newArray = [lexoArray[0]]
//     //console.log(newArray)
//     for (i=0; i<strArray.length; i++) {
//         let firstLetter = lexoArray[i]
//         let afterString = []//strArray.slice(i + 1).join('')
//         let charPos = strArray.indexOf(lexoArray[i])
//         let toGo = strArray.length - (charPos + 1)
//         //console.log(strArray.slice(i + 1))
//         for (j=0; j<toGo; j++) {
//             afterString.push(strArray.slice(j, j+1).join(''))
//             if (toGo - j != 0) {
//                 afterString.push(strArray.slice(j, j+1).join(''))
//                 j++
//             }
//             console.log('afterString: ' + afterString)
//         }
//
//
//         console.log("i: " + i + " letter: " + firstLetter + ' pos: ' + charPos + " chars to go: " + toGo)
//         //console.log("afterstring: " + afterString)
//         if (afterString == null || "" || undefined || " ") {
//             i++ //push this letter once??
//         } else {
//             newArray.push(firstLetter + afterString)
//         }
//
//     }
//     //console.log(newArray)
//     let finalStr = newArray.join('')
//     //console.log('answer ' + finalStr)

}
