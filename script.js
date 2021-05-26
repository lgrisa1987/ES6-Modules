//Importing Module
/* import {
    addToCart,
    totalPrice as price,
    tq
} from './shoppingCart.js';
addToCart("breads", 5);
console.log(price, tq); */
/* console.log('Importing module'); */

/* import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart("breads", 5); */

/* import add, {
    cart
} from "./shoppingCart.js";

add("pizza", 2)
add("bread", 5)
add("apples", 4)

console.log(cart);

const shoppingCart2 = (function () {
    const cart = [],
        shippingCost = 10,
        totalPrice = 237,
        totalQuantity = 23,
        addToCart = (product, quantity) => {
            cart.push({
                product,
                quantity
            });
            console.log(`${quantity} ${product} were added to the cart, shipping cost is ${shippingCost}`);
        },
        orderStock = (product, quantity) => console.log(`${quantity} ${product} orderer from supplier`);
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);

console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost); */

//Export 
export.addToCart = (product, quantity) => {
    cart.push({
        product,
        quantity
    });
    console.log(`${quantity} ${product} were added to the cart, shipping cost is ${shippingCost}`);
}

//Import
const {
    addToCart
} = require("./shoppingCart.js")