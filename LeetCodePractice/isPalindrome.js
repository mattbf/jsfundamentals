// Takes a number and returns true if it is a palindrom
var isPalindrome = function(num) {
    let rem, b, temp = 0
    b=num
    while(x>0)
    {
        rem=num%10;
        x=parseInt(num/10);
        temp=temp*10+rem;
    }
    if(temp==b)
    {
        return true
    }
    else
    {
     return false
    }
};
