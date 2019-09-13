//return all of the odd numbers in a range inclusive

let output = []
   function oddNumbers(l, r) {
       for (var i=l; i<=r; i++) {
        //console.log(i)
        //console.log(i % 2 == 0 ? "EVEN" : "ODD")
        if (i % 2 == 0) {
            continue //if even skip it
        } else {
            output.push(i)
        }
       }
       return output
}
