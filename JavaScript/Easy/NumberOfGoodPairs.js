
// Problem 1512. Number of Good Pairs @LeetCode //
var numIdenticalPairs = function(nums) {
    let pairs = 0; //have to do let not const, bc I reassign it
    
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {     
            if (nums[i] === nums[j]) { // I don't need  && i<j since j = i+1
                pairs ++;
            } else {
            continue;
            }
        }
    }
  return pairs;
};