var cart = [];

function getCart(itemName) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let low = Math.ceil(1);
 let price = Math.floor(Math.random() * (Math.floor(100) - low + 1)) + low;
 let newItem = { itemName: item, itemPrice: price };
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  let items = cart.length;
  if (items === 0) {
    return `Your shopping cart is empty.`;
  } else {
    for (let i = 0; i < items; i++) {
      if (i === 0) {
        var list = `${cart[0].itemName} at $${cart[0].itemPrice}`;
      } else if (i === items - 1) {
        list += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      } else {
        list += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
    return `In your cart, you have ${list}.`;
  }
}

function total() {
  let total = 0;
  for (let x = 0; x < cart.length; x++) {
    total += cart[x].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  if () {
    
  } else {
    
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
