var sortArrayByParity = function(A) {
    evens = []
    odds = []
    A.forEach(function(num){
        if(num % 2 == 0){
        //even
        evens.push(num)
    } else {
        odds.push(num)
    }
    })
    return evens.concat(odds)
};
