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
    for (let a = 0; a < items; a++) {
      if (a === 0) {
        var list = `${cart[0].itemName} at $${cart[0].itemPrice}`;
      } else if (a === items - 1) {
        list += `, and ${cart[a].itemName} at $${cart[a].itemPrice}`
      } else {
        list += `, ${cart[a].itemName} at $${cart[a].itemPrice}`
      }
    }
    return `In your cart, you have ${list}.`;
  }
}

function total() {
  let total = 0;
  for (let b = 0; b < cart.length; b++) {
    total += cart[b].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  if (cart.length > 0) {
    var index = cart.indexOf();
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  // write your code here
}
