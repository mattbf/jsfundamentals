var findShortestSubArray = function(nums) {
    //make a count function
    // take the highest count value and find start and end indexes
    // return the length of the array

    var highestCount = [{count: 0, number: []}]
    nums.forEach(function(number) {
        let count = 0
        //console.log("number checked: " + number)
       for(i = 0; i < nums.length; i++){
        if(nums[i] == number){count++}
        }
        //console.log("number checked: " + number + " count= " + count)
        if (count > highestCount[0].count && highestCount[0].number.indexOf(number) == -1) {
            highestCount[0] = {count: count, number: [number]}
        }
        if (count == highestCount[0].count && highestCount[0].number.indexOf(number) == -1) {
            highestCount[0].number.push(number)

        }
    })
    console.log(highestCount)
    let shortestSubArray = 100000
    for (var j=0; j<highestCount[0].number.length; j++){
        let first = nums.indexOf(highestCount[0].number[j])
        let last = nums.lastIndexOf(highestCount[0].number[j])
        console.log("num checked " + highestCount[0].number[j])
        if ((last + 1) - first < shortestSubArray){
            shortestSubArray = (last + 1) - first
        }
    }
    //console.log("Shortest Array: " + shortestSubArray)
    return shortestSubArray

};
