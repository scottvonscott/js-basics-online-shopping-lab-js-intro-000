var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {
    itemName:`${item}`,
    itemPrice: Math.floor(Math.random() * 100) + 1
  }
  cart.push(newItem);
  return `${item} has been added to your cart.`
}

// function viewCart() {
//   if (cart.length === 0) {
//     return "Your shopping cart is empty"
//   }
//   let i = 0
//   for (i = 0; i < cart.length; i+= 1) {
//
//   }
// }

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}}.`
  } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0]}.`
  } else {
      return `In your cart, you have ${cart[0]}.`
  }
}

// function viewCart() {
//   switch(cart) {
//     case cart.length >= 1:
//       return `In your cart, you have ${cart[0]}.`
//       break;
//     case cart.length === 2:
//       return `In your cart, you have ${cart[0]},`
//       break;
//     case cart.length >= 3:
//       return `In your cart, you have ${cart[0]}, `
//       break;
//     default:
//       return "Your shopping cart is empty."
//   }
// }

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
