//Importing Module
/* import {
    addToCart,
    totalPrice as price,
    tq
} from './shoppingCart.js';
addToCart("breads", 5);
console.log(price, tq); */
console.log('Importing module');

/* import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart("breads", 5); */

import add, {
    cart
} from "./shoppingCart.js";

add("pizza", 2)
add("bread", 5)
add("apples", 4)

console.log(cart);