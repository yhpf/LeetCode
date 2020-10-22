// Problem 1470. Shuffle the Array @LeetCode //
var shuffle = function(nums, n) {
    const shuffleArray = []
    
    for (let i=0; i < (nums.length/2); i++){
        shuffleArray.push(nums[i]);
        shuffleArray.push(nums[i+n]);
    }
    
    return shuffleArray;
};