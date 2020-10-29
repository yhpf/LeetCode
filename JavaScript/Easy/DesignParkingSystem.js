// Problem 1603. Design Parking System @LeetCode //

var ParkingSystem = function(big, medium, small) { // object constructor
    this.bigRemaining = big;
    this.mediumRemaining = medium;
    this.smallRemaining = small;
};

ParkingSystem.prototype.addCar = function(carType) { // object method
    if (carType == 1){
        if(this.bigRemaining > 0){
            this.bigRemaining--;
            return true;
        }else{
            return false;
        }
    } else if (carType == 2){
        if(this.mediumRemaining > 0){
            this.mediumRemaining--;
            return true;
        }else{
            return false;
        }
    } else if (carType == 3){
        if(this.smallRemaining > 0){
            this.smallRemaining--;
            return true;
        }else{
            return false;
        }
    }   
};

// this has to be used so I can use big, medium and small for carTyp 
// big = 1, medium = 2, small = 3