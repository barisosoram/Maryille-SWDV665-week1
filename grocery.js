var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
function ReturnGroceryList(list) {
    return "Name :" + list.name + " Quantity: " + list.quantity + " Price=" + list.price;
}
var arrayofgroceries = new Grocery("Milk , Bread , Eggs", "3,6,11", "$7,$8,$5");
document.body.textContent = ReturnGroceryList(arrayofgroceries);
