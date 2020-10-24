
// Problem 771. Jewels and Stones @LeetCode //
var numJewelsInStones = function(J, S) {
    let matches = 0;
    
    for (i = 0; i < S.length; i++) {
        if (J.includes(S[i])){
            matches++;
        }
    }
    return matches;
};

//obs, make sure to look at S and then J, intead of the other way around. 