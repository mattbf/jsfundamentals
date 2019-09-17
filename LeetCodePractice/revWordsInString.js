var reverseWords = function(s) {
       let words = s.split(" ")
       let revWords = []
       words.forEach(word => revWords.push(word.split("").reverse().join("")))

       return revWords.join(" ")
};
