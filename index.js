class CoffeeShop {
    constructor(name, menu, orders = []) {
        this.name = name;
        this.menu = menu;
        this.orders = orders;

    }

    addOrder(order) {
        if (this.menu.find((element) => element.item === order)) {
            this.orders.push(order);
            return `Your ${order} is on its way!`
        } else {
            return "This item is currently unavailable!";
        }
    }


    listOrders() { return [...this.orders] }

    fulfillOrder() {
        if (this.orders.lenght != 0) {
            return `The ${this.orders.shift()} is ready!`;
        } else { return "All orders have been fulfilled" }



    }

    dueAmount() {
        let sum = 0
        for (const item in this.menu) {
            const element1 = this.menu[item].item;

            for (const key in this.orders) {

                const element2 = this.orders[key];

                if (element1 === element2) { sum = sum + this.menu[item].price }



            }
        }
        return `Your total is ${sum} euros`
    }

    cheapestItem() {
        const element = [];
        for (const key in this.menu) {
            element.push(this.menu[key].price)

        }
        const result = Math.min(...element);

        for (const key in this.menu) {
            if (this.menu[key].price === result) {
                return `'${this.menu[key].item}' is our cheapest item at a cost of ${result} eur`

            }
        }

    }

    drinksOnly() {
        const drinks = []
        for (const key in this.menu) {
            if (this.menu[key].type === "drink") {
                drinks.push(this.menu[key].item)

            }

        }
        return drinks.toString();
    }
    foodOnly() {
        const food = []
        for (const key in this.menu) {
            if (this.menu[key].type === "food") {
                food.push(this.menu[key].item)

            }

        }
        return food.toString();
    }

};





const orangeCoffee = new CoffeeShop("Orange Coffee", [
    { item: "Espresso", type: "drink", price: 2.5 },
    { item: "Macchiato", type: "drink", price: 3.0 },
    { item: "Americano", type: "drink", price: 3.0 },
    { item: "Flat white", type: "drink", price: 3.0 },
    { item: "Iced Coffee", type: "drink", price: 4.0 },
    { item: "Muffin", type: "food", price: 2.5 },
    { item: "Cinnamon Roll", type: "food", price: 8.5 },
    { item: "Unicorn muffin", type: "food", price: 2.5 },
    { item: "Pegasos muffin", type: "food", price: 2.5 },
    { item: "Toast", type: "food", price: 1.5 },
    { item: "A single potato", type: "food", price: 0.5 },
    { item: "A single bean", type: "food", price: 0.05 },
]);

// console.log(orangeCoffee.addOrder("Americano"));
// console.log(orangeCoffee.addOrder("Toast"));
// console.log(orangeCoffee.addOrder("Macchiato"));


// console.log(orangeCoffee.fulfillOrder());
// console.log(orangeCoffee.listOrders());
// console.log(orangeCoffee.dueAmount());
// console.log(orangeCoffee.cheapestItem());
// console.log(orangeCoffee.drinksOnly());
// console.log(orangeCoffee.foodOnly());

console.log(orangeCoffee.addOrder("hot cocoa"));
console.log(orangeCoffee.addOrder("iced tea"));
console.log(orangeCoffee.addOrder("Cinnamon Roll"));
console.log(orangeCoffee.addOrder("Iced Coffee"));
console.log(orangeCoffee.listOrders());
console.log(orangeCoffee.dueAmount());
console.log(orangeCoffee.fulfillOrder());
console.log(orangeCoffee.listOrders());
// console.log(orangeCoffee.fulfillOrder());
// console.log(orangeCoffee.listOrders());