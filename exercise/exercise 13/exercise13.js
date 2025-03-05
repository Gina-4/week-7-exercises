// Project: Order Management System

function calculatePrice(productType, quantity, isMember) {
    const prices = {
      "electronics": 100,
      "clothing": 50,
      "grocery": 20
    };
    let basePrice = prices[productType];
    let totalPrice = basePrice * quantity;

    console.log("Total price at the start " + totalPrice);
    if (isMember) {
      totalPrice = totalPrice - (totalPrice * 0.1)/* 10% discount */;
      console.log("After member discount applied " + totalPrice);
    }

    if (quantity > 5) {
      totalPrice = totalPrice - (totalPrice * 0.05) /*5% discount */;
      console.log("After quantity discount applied " + totalPrice);
    }
    
    return totalPrice;
    
  }
  console.log(calculatePrice("electronics", 3, true)) // 
  console.log(calculatePrice("clothing", 6, false)) //
  console.log(calculatePrice("grocery", 7, true)) //
  