// let storeItem = {
//     "price": 67,
//     "category": "names",
//      "discount": function applyDiscount(percent){
//         return this.price * (1 - percent / 100);
//      }
// }
const storeItem = {
    price: 100,           // example price
    category: 'Electronics',  // example category
    applyDiscount(percent) {
      const discountAmount = this.price * (percent / 100);
      this.price -= discountAmount;
      return this.price;
    }
  };
  
  // Example usage:
  console.log("Original Price:", storeItem.price); // 100
  storeItem.applyDiscount(20); // Apply 20% discount
  console.log("Discounted Price:", storeItem.price); // 80
  