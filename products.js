
const products = [
  { name: "Phone", price: 15000, inStock: true },
  { name: "Laptop", price: 55000, inStock: false },
  { name: "Tablet", price: 25000, inStock: true },
  { name: "Watch", price: 8000, inStock: true },
  { name: "TV", price: 40000, inStock: false },
];

 const result = products
 .filter(product => product.inStock === true)
 
 .map(product => { 
  return{ 
    name: product.name,
    newPrice: product.price * 0.9
  }
 })
 console.log(result);