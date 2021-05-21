//Exporting Module
console.log('Exporting module');
const shoppingCost = 11;
export const cart = [];
const totalPrice = 237,
    totalQuantity = 23;
export const addToCart = (product, quantity) => {
    cart.push({
        product,
        quantity
    });
    console.log(`${quantity} ${product} were added to the cart`);
}
export {
    totalPrice,
    totalQuantity as tq
};

export default (product, quantity) => {
    cart.push({
        product,
        quantity
    })
    console.log(`${quantity} ${product} were added to the cart`);
}