'use strict'

// Function to grab data from add product form and push to all products array

function addProduct(event) {
  event.preventDefault();
  let productSellerInput = event.target.productSellerInput.value;
  let productNameInput = event.target.productNameInput.value;
  let productImageInput = event.target.productImageInput.value;
  let productPriceInput = event.target.productPriceInput.value;
  let productDiscountInput = event.target.productDiscountInput.value
  let productStockInput = event.target.productStockInput.value;
  let productDescInput = event.target.productDescInput.value;
  let newProduct = new product(
    productSellerInput,
    productNameInput,
    productImageInput,
    productPriceInput,
    productDiscountInput,
    productStockInput,
    productDescInput
  );
  allProducts.push(newProduct);
  document.getElementById("add-product-form").reset();
  syncProducts();
}