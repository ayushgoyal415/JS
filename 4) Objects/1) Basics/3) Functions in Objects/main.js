const car = {
	gear: 2,

    // Bigger way
    set_gear: function(new_gear){
        this.gear = new_gear;
    },
    // Concise way
	set_gear(new_gear) {
		this.gear = new_gear;
	},        
};

console.log(car.gear);
car.set_gear(4);
console.log(car.gear);
