// Problem 1313. Decompress Run-Length Encoded List @LeetCode //

var decompressRLElist = function(nums) {
    
	let decompressedList = [];

  	for (let i = 0; i < nums.length; i += 2) { 
    	for (let j = 0; j < nums[i]; j++) { 
      		decompressedList.push(nums[i + 1]);
    	}
  	}
    
	return decompressedList;  
};