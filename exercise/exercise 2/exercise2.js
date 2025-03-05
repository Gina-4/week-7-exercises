
// Project: Order Management System

function calculatePrice(productType, quantity, isMember) {
  const prices = {
    "electronics": 100,
    "clothing": 50,
    "grocery": 20
  };
  let basePrice = prices[productType];
  let totalPrice = basePrice * quantity;
  if (isMember) {
    totalPrice *=0.95;
  }
  if (quantity > 5) {
    totalPrice -= totalPrice * 0.05;
  }
  
  return totalPrice;
  
}
console.log(calculatePrice("electronics", 3, true)) // 
console.log(calculatePrice("clothing", 6, false)) //
console.log(calculatePrice("grocery", 7, true)) //
