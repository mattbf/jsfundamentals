var rotate = function(nums, k) {
    function rot(arr) {
        let lastIndex = nums.pop()
        //nums.pop()
        nums.unshift(lastIndex)
    }
    for(var i=0; i<k; i++) {
        rot(nums)
    }
    return nums
};
