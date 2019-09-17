// return the number of prime numbers less than a non-negative number n
var countPrimes = function(n) {
    let count = 0
    function isPrime(num) {
        let prime = true
        if (num <= 1) {
            prime = false;
        }
        else {
            for (var i=2; i*i<=num; i++) {
                if (num % i === 0) {
                    prime = false;
                    break;
                }
            }
        }
        return prime
    }
    for (var i=0; i<n; i++) {
        if(isPrime(i)) {
            count++
        }
    }
    return count
};
