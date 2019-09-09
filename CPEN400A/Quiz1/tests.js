//QUnit Test File
 
//Question #1
QUnit.test("caseInsensitiveStringSearch", function( assert ) {
  assert.equal( caseInsensitiveStringSearch(["apple"],"apple"), 0, "Match first element of array" );
  assert.equal( caseInsensitiveStringSearch([],"apple"), -1, "Search an empty array" );
  assert.equal( caseInsensitiveStringSearch([],""), -1, "Empty search string and empty array" );
  assert.equal( caseInsensitiveStringSearch(["apple"],""), -1, "Empty search string" );
  assert.equal( caseInsensitiveStringSearch(["banana"],"apple"), -1, "Match a non-existing string" );
  assert.equal( caseInsensitiveStringSearch(["apple", "banana", "orange"],"banana"), 1, "Match a non-existing string" );
  assert.equal( caseInsensitiveStringSearch(["apple", "banana", "orange"],"orange"), 2, "Match last element of array" );
  assert.equal( caseInsensitiveStringSearch(["apple", "banana", "orange"],"Banana"), 1, "Match element of array with first letter upper case" );
  assert.equal( caseInsensitiveStringSearch(["apple", "banana", "orange"],"ORANGE"), 2, "Match element of array with all letters upper case" );
  assert.equal( caseInsensitiveStringSearch(["APPle", "banana", "oRANge"],"OrANgE"), 2, "Both array and search string have mixed casing" );
});
 
//Question #2
QUnit.test("lowerCaseEmails", function( assert ) {
  var userEmails1 = [{userId: 1, email: "Testing1@gmail.com" }];
  var userEmails2 = [];
  var userEmails3 = [{userId: 1, email: "Testing1@gmail.com" }, {userId: 2, email: "TesTing2@Gmail.com" }];
  var userEmails4 = [{userId: 1}];
     
  assert.equal( lowerCaseEmails(userEmails1)[0].email, "testing1@gmail.com", "Lowercase first letter" );
  assert.ok( lowerCaseEmails(userEmails2), "Handle empty array" );
  assert.equal( lowerCaseEmails(userEmails3)[0].email, "testing1@gmail.com", "Lowercase the first email in the list" );
  assert.equal( lowerCaseEmails(userEmails3)[1].email, "testing2@gmail.com", "Lowercase the second email in the list" );
  assert.ok( lowerCaseEmails(userEmails4), "Handle missing email" );
});
 
//Question #3
QUnit.test("tenSortedIntegers", function( assert ) {
  assert.equal( tenSortedIntegers().length, 10, "Exactly ten elements are returned" );
  assert.ok( isInDescendingOrder(tenSortedIntegers()), "Elements are in descending order" );
  assert.ok( areAllIntegers(tenSortedIntegers()) , "Elements are all integers" );
  assert.ok( allElementsAreWithinRange(tenSortedIntegers(), 1, 50), "Elements are within range" );
  assert.notEqual( tenSortedIntegers(), tenSortedIntegers(), "Elements are randomly generated");
});
 
//Question #4
QUnit.test("combineArrays", function( assert ) {
  var arr1 = ['a', 'b', 'c'];
  var arr2 = [1, 2];
  var arr3 = [1, 2, 3, 4];
  var arr4 = [];
 
  assert.deepEqual( combineArrays(arr1, arr2), ['a', 1, 'b', 2, 'c'], "ArrA > ArrB" );
  assert.deepEqual( combineArrays(arr1, arr3), ['a', 1, 'b', 2, 'c', 3, 4], "ArrA < ArrB" );
  assert.deepEqual( combineArrays(arr2, arr1), [1, 'a', 2, 'b', 'c'], "ArrA < ArrB, Test #1 swapped" );
  assert.deepEqual( combineArrays(arr1, arr4), arr1, "Combine with an empty array" );
  assert.deepEqual( combineArrays(arr4, arr4), arr4, "Combine two empty arrays" );
});
 
//Question #5
QUnit.test("concatAllStringSubsets", function( assert ) {
  assert.equal( concatAllStringSubsets(""), "", "Empty string" );
  assert.equal( concatAllStringSubsets("z"), "z", "String length = 1" );
  assert.equal( concatAllStringSubsets("ef"), "eeff", "String length = 2" );
  assert.equal( concatAllStringSubsets("gaf"), "aaffggagaf", "String length = 3" );
  assert.equal( concatAllStringSubsets("dbac"), "aacbbabaccddbdbadbac", "String length = 4" );
  assert.equal( concatAllStringSubsets("sfdegct"), "cctddedegdegcdegcteegegcegctffdfdefdegfdegcfdegctggcgctssfsfdsfdesfdegsfdegcsfdegctt", "String length > 4" );
  assert.equal( concatAllStringSubsets("ee"), "eee", "String with 1 duplicate, length = 2" );
  assert.equal( concatAllStringSubsets("eefef"), "eeeeefeefeeefefefefeefefffefef", "String with 3 duplicates, length = 5" );
});
 
 
// Helper Methods
 
function areAllIntegers(intArr) {
  for (var i=0; i<intArr.length; i++) {
    if (!isInt(intArr[i])) {
      return false;
    }
  }
  return true;
}
 
function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}
 
function allElementsAreWithinRange(intArr, min, max) {
  for (var i=0; i<intArr.length; i++) {
    if (intArr[i] < min || intArr[i] > max) {
      return false;
    }
  }
  return true;
}
 
function isInDescendingOrder( intArr ) {
  var prev;
  if (intArr.length < 2) {
    return true;
  }
  for (var i=1; i<intArr.length; i++) {
    prev = intArr[i-1];
    if (intArr[i] > prev) {
      return false;
    }
  }
  return true;
}