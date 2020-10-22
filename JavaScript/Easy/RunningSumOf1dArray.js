// Problem 1480. Running Sum of 1d Array @LeetCode //

var runningSum = function(nums) {
	const newSumArray = [];
	
	newSumArray.push(nums[0]);
	
	for (let i=0; i+1 < nums.length; i++){
		newSumArray.push(newSumArray[i] + nums[i+1]);    
	}
	
	return newSumArray;
};