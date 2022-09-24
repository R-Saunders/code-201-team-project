'use strict'

// Function to grab data from add seller form and push to all sellers array

function addSeller(event) {
  event.preventDefault();
  let sellerNameInput = event.target.sellerNameInput.value;
  let sellerDescInput = event.target.sellerDescInput.value;
  let sellerImageInput = event.target.sellerImageInput.value;
  let newSeller = new seller(
    sellerNameInput,
    sellerDescInput,
    sellerImageInput
  );
  allSellers.push(newSeller);
  document.getElementById("add-seller-form").reset();
  syncSellers();
}