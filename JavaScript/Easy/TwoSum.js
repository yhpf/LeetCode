// Problem 1. Two Sum @LeetCode //

var twoSum = function(nums, target) {
	const index = {};
	
	for (let i = 0; i< nums.length; i++) {
		
		let diff = target - nums[i];
		
		if(index[nums[i]] !== undefined) {
			return [index[nums[i]], i]
		} 
		index[diff] = i;            
	}
};