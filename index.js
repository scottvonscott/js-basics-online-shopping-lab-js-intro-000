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

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var placeholder = "In your cart, you have"
    var newArray = []
      for (var i = 0; i < cart.length; i++) {
        newArray.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
      let finalElement = "and " + newArray[newArray.length - 1]
      newArray[newArray.length - 1] = finalElement
      placeholder += newArray.join() + "."
      return placeholder
  }
}

// function viewCart() {
//   if (cart.length === 0) {
//     return "Your shopping cart is empty."
//   } else if (cart.length === 1){
//       return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
//   } else if (cart.length === 2) {
//       return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
//   } else {
//     var placeholder = "In your cart, you have"
//     var newArray = []
//       for (var i = 0; i < cart.length; i++) {
//         newArray.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
//       }
//       newArray.splice(-1, 0, " and")
//       placeholder += newArray.join() + "."
//       return placeholder
//   }
// }
// return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`

function cartDescription() {

}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
