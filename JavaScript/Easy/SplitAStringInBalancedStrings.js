// Problem 1221. Split a String in Balanced Strings @LeetCode //

var balancedStringSplit = function(s) {
    let counter = 0
    let countR = 0
    let countL = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'R') {
            countR++;
        } else {
            countL++;
        }
        
        if (countR == countL){
            counter++;
            countR = 0;
            countL = 0;
        }
    }
    
    return counter;
};