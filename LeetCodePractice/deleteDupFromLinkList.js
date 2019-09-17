var deleteDuplicates = function(head) {
    let array1 = head.split("->")
    let removedD = array1.filter((num,i) => array1.indexOf(num) === i)
    return removedD.join("->")
};
