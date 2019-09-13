//Find needle in haystack
var strStr = function(haystack, needle) {

    if (haystack.indexOf(needle) && needle != "") {
        return haystack.indexOf(needle)
    } else {
        return 0
    }
};
