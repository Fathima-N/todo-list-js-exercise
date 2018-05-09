class Pizza {

	constructor(wheat, vegan) {
		this.wheat = wheat;
		this.vegan = vegan;
		this.toppings = ["cheese"];
		this.crust = [];
		this.delivery = false
	}

	setSize (size) {
		if (size === 's' || size === 'm' || size === 'l') {
			this.size = size;
		} else {
			this.size = `Please choose a pizza size`
		}
	}

	addTopping(topping) {
		this.toppings.push(topping);
	}

	crustLevel(type) {
		this.crust.push(type);
	}

	deliveryStatus(status) {
		this.delivery = true;
	}

	maxToppings(number) {
		if (this.toppings.length > 3) {
			console.log(`Sorry! You have ${this.toppings.length - 3} extra toppings.`)
		}
	}

	getPrice() {
		const basePrice = 10;
		const toppingPrice = 2;
		return basePrice + (this.toppings.length * toppingPrice);
	}

}

let pizza1 = new Pizza("whole", true);
pizza1.addTopping("mushrooms");
pizza1.addTopping("pepper");
pizza1.addTopping("bananas");
pizza1.crustLevel("thin");
pizza1.deliveryStatus();
pizza1.maxToppings()
pizza1.setSize("s");
console.log(pizza1.getPrice());
console.log(pizza1)


let pizza2 = new Pizza();
pizza2.addTopping("more cheese")
// console.log(pizza2)