// Problem 1486. XOR Operation in an Array @LeetCode //

var xorOperation = function(n, start) {
    let nums = [];
    
    for (let i = 0; i < n; i++) {
        nums[i] = start + 2*i;
    }
    
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    
    return result
};


// alternative //

var xorOperation = function(n, start) { 
    let result = 0;
    
    for (let i = 0; i < n; i++) {
        result = result ^ (start + 2*i);
    }
    
    return result
};