// Problem 1365. How Many Numbers Are Smaller Than the Current Number @LeetCode //

var smallerNumbersThanCurrent = function(nums) {
    let counters = [];
    
    for (let i = 0; i< nums.length; i++) {
        let counter = 0;
        
        for (let j = 0 ; j < nums.length; j++) {
            
            if (j != i && nums[j] < nums[i]){
                counter++;
            }
        }
        
        counters.push(counter);
    }
        
    return counters;
};