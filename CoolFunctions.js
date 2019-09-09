
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
