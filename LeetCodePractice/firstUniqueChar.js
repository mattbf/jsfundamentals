
//given a string determine the first unqiue character (does not repeat)
var firstUniqChar = function(s) {
let hashMap = [] //[{index: 0, char: "", count: 0}]
for (var i=0; i<s.length; i++){
    let count = 0
    for (var j=0; j<s.length; j++){
        if(s[i] === s[j]){
            count++
        }
    }
    hashMap.push({index: i, char: s[i], count: count})
}
//console.log(hashMap)
for (var i=0; i<hashMap.length; i++){
    console.log("char: " + hashMap[i].char + " count: " + hashMap[i].count)
    if(hashMap[i].count == 1){
        return hashMap[i].index
    }
}
return -1

//     if (hashMap.length > 0){
//         let singleChars = hashMap.filter(function(char){
//         return char.count == 1
//     })
//         if(singleChars.length > 0) {
//             return singleChars[0].index
//         } else {
//             return -1
//         }

//     } else{
//         return -1
//     }



};
