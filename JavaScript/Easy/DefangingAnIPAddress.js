// Problem 1108. Defanging an IP Address @LeetCode //
var defangIPaddr = function(address) {
    address = address.replace(/\./g, "[.]"); //you have to use \. and not only . also /something/g replaces all something
    return address;
};

// would probably be faster to use a for loop and go over each character and and put into nre string, and for every . add [.]