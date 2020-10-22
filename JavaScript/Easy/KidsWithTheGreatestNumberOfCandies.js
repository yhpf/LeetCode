// Problem 1431. Kids With the Greatest Number of Candies @LeetCode //

var kidsWithCandies = function(candies, extraCandies) {
	const canHaveMaxCandy = []

	for (let i=0; i < candies.length; i++){
		if(candies[i] + extraCandies >= Math.max(...candies)){
			canHaveMaxCandy.push(true);
		} else{
			canHaveMaxCandy.push(false);
		}   
	}

	return canHaveMaxCandy;
};