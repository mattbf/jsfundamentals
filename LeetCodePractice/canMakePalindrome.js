var validPalindrome = function(s) {
    var normalized = s.toLowerCase().match(/[a-z]/gi).reverse();

    function isPalindrome(str){
    var normalized = str.toLowerCase().match(/[a-z]/gi).reverse();
    return normalized.join('') === normalized.reverse().join('');
    }
    let deleteIndex
    let deletedChar = s.toLowerCase().match(/[a-z]/gi)
    let revdeletedChar = s.toLowerCase().match(/[a-z]/gi).reverse()
    //console.log(isPalindrome(s))
    if(isPalindrome(s)){
        return true
    } else {
        for(var i=0; i<normalized.length; i++){
            let thisScope = s.toLowerCase().match(/[a-z]/gi)
            //console.log(normalized[i] + " " + normalized.reverse()[i])
            //console.log("is " + (normalized[i] != normalized.reverse()[i]))
            if(normalized[i] != normalized.reverse()[i]){
                //console.log(normalized)
                //console.log(thisScope)
                deleteIndex = i//thisScope.indexOf(normalized[i])
                //console.log(deleteIndex)
                deletedChar.splice(deleteIndex,1)
                //console.log(deletedChar.join(""))
                revdeletedChar.splice(deleteIndex,1)
                break
            }
        }

        if (isPalindrome(deletedChar.join(""))) {
            return true
        } else {
            if (isPalindrome(revdeletedChar.join(""))){
                return true
            }
            return false
        }
    }

};
