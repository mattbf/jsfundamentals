
// check to see if the character is a vowel
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
    }
//Return the n! of an interger
function factorial(n) {
    var nfactor = n
    for (var i= (n - 1); i>0; i--) {
        nfactor = nfactor * i
    }
    return nfactor
}

//Checks to see if a string is Palindrome

function isPalindrome(str){
  var re = /[\W_]/g
  var lowRegStr = str.toLowerCase().replace(re, '')
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr
}

//Checks to see if a number is a Palindrome
function isPalindrome(num) {
    let rem, b, temp = 0
    b=num
    while(x>0)
    {
        rem=num%10;
        x=parseInt(num/10);
        temp=temp*10+rem;
    }
    if(temp==b)
    {
        return true
    }
    else
    {
     return false
    }
};
