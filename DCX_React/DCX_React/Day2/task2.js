// Array of product objects
let inventory = [
  { name: "Apple", price: 1.5, quantity: 100 },
  { name: "Banana", price: 0.5, quantity: 200 },
  { name: "Cherry", price: 2.0, quantity: 50 },
];

// Function to add a new product to the inventory
function addProduct(product) {
  inventory.push(product);
}

// Function to remove a product from the inventory
function removeProduct(productName) {
  inventory = inventory.filter((product) => product.name !== productName);
}

// Function to update the quantity of a product
function updateQuantity(productName, newQuantity) {
  const product = inventory.find((product) => product.name === productName);
  if (product) {
    product.quantity = newQuantity;
  }
}

// Function to display all products in the inventory
function displayInventory() {
  inventory.forEach((product) => {
    console.log(
      `Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`
    );
  });
}

// Example usage
addProduct({ name: "Orange", price: 1.2, quantity: 150 });
removeProduct("Banana");
updateQuantity("Cherry", 75);
displayInventory();
