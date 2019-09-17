
// given two lists of restaurants it sranks the matching ones in order
var findRestaurant = function(list1, list2) {
        var hashMap = []
        for (var i=0; i<list1.length; i++) {
            // console.log("Checking: " + list1[i])
            // console.log(list2.indexOf(list1[i]))
            if (list2.indexOf(list1[i]) != -1) {
                let  indexSum = i + (list2.indexOf(list1[i]))
                let hashIndex = hashMap.findIndex(item => item.indexSum == indexSum)
                if (hashMap.findIndex(item => item.indexSum == indexSum) == -1) {
                    hashMap.push({indexSum: indexSum, rests: [list1[i]]})
                } else {
                    hashMap[hashIndex].rests.push(list1[i])
                    //console.log("It exists: " + hashMap[hashIndex].rests)
                }
            }
        }
        hashMap.sort((a, b) => a>b ? 1 : b>a ? -1 : 0)
        return hashMap[0].rests
};
