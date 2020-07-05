class Grocery {
    
    constructor(public name: string, public quantity: string, public price: string) {
       
    }
}

interface GroceryList {
    name: string;
    quantity: string;
    price:string;
}

function ReturnGroceryList(list: GroceryList) {
    return "Name :"+list.name+" Quantity: "+list.quantity+" Price="+list.price;
}

let arrayofgroceries = new Grocery("Milk , Bread , Eggs", "3,6,11", "$7,$8,$5");

document.body.textContent = ReturnGroceryList(arrayofgroceries);