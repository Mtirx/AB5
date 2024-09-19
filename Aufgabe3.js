let products = [
  { id: 1, name: "Laptop", cost: 999 },
  { id: 2, name: "Smartphone", cost: 599 },
  { id: 3, name: "Headphones", cost: 199 },
];

function getProductById(productId) {
  return products.find((product) => product.id === productId) || null;
}

function addProduct(name, cost) {
  const newId = Math.max(...products.map((product) => product.id)) + 1;
  products.push({ id: newId, name: name, cost: cost });
}

function listProducts() {
  products.forEach((product) => {
    console.log(`${product.name} costs ${product.cost}€`);
  });
}

let product = getProductById(2);
console.log(product);

addProduct("Tablet", 399);
listProducts();
