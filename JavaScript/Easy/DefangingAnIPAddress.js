// Problem 1108. Defanging an IP Address @LeetCode //
var defangIPaddr = function(address) {
    address = address.replace(/\./g, "[.]"); //you have to use \. and not only . also /something/g replaces all something
    return address;
};