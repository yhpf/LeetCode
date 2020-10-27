// Problem 1528. Shuffle String @LeetCode //

var restoreString = function(s, indices) {
    let newArray = [];
    
    for (i = 0; i < indices.length; i++){
        newArray[indices[i]] = s[i]
    }
    
    shuffledString = newArray.join('') // use ('') to get rid of the , in the array //
        
    return shuffledString
};