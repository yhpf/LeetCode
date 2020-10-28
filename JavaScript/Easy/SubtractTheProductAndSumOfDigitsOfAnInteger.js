
// Problem 1281. Subtract the Product and Sum of Digits of an Integer @LeetCode //

var subtractProductAndSum = function(n) {
    let digits = n.toString().split('').map(Number);
    product = 1;
    sum = 0;
    
    for (var i=0; i<digits.length; i++) {
        product *= digits[i];
        sum += digits[i];
    }
    
    return (product -= sum);
};