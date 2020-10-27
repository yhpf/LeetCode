// Problem 1342. Number of Steps to Reduce a Number to Zero @LeetCode //
var numberOfSteps  = function(num) {
    counter = 0
    
    while (num > 0) {
        if (num % 2 === 0){
        num = num/2;
        } else{
        num = num - 1;
        }
        counter++;
    } 
    return counter;
};