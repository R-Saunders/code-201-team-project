'use strict'

// Shriking Header

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 1) {
    document.getElementById("marketplace-logo").style.width = "0";
    document.getElementById("marketplace-logo").style.height = "0";
  } else {
    document.getElementById("marketplace-logo").style.width = "120px";
    document.getElementById("marketplace-logo").style.height = "120px";
  }
}

// Constructors for sellers and products

class seller {
  constructor(sellerName, sellerDesc, sellerImage) {
    this.sellerName   = sellerName;
    this.sellerDesc   = sellerDesc;
    this.sellerImage  = sellerImage;
  }
}

class product {
  constructor(productSeller, productName, productImage, productPrice, productDiscount, productStock, productDesc) {
    this.productSeller    = productSeller;
    this.productName      = productName;
    this.productImage     = productImage ;
    this.productPrice     = productPrice ;
    this.productDiscount  = productDiscount;
    this.productStock     = productStock ;
    this.productDesc      = productDesc;
  }
}

// Variables to store full array of sellers/products

let allSellers = [];
let allProducts = [];

// Sync with local storage
function syncSellers() {
  localStorage.setItem('sellers', JSON.stringify(allSellers));
  allSellers = JSON.parse(localStorage.getItem('sellers'));
}

function syncProducts() {
  localStorage.setItem('products', JSON.stringify(allProducts));
  allSellers = JSON.parse(localStorage.getItem('products'));
}

// Function to grab data from add seller page form and push to all sellers array

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

// Function to grab data from add product page form and push to all products array

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

// Function to create cards from a product array

function createCards(productList, cardCount, outputTarget) {
  let cardOutput = document.getElementById(outputTarget);
  for (let i = 0; i < cardCount; i++) {
        let curentProduct = productList[i];
        let card = document.createElement('div');
        card.classList.add('card');
        let cardImageContainer = document.createElement('div');
        cardImageContainer.classList.add('image-card-container');
        card.appendChild(cardImageContainer);
        let cardImage = document.createElement('img');
        cardImage.classList.add('card-img-top');
        cardImage.alt = curentProduct.productName;
        cardImage.src = 'img/products/' + curentProduct.productImage;
        cardImageContainer.appendChild(cardImage);
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);
        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerHTML = curentProduct.productName;
        cardBody.appendChild(cardTitle);
        let cardButton = document.createElement('a');
        cardButton.classList.add('btn','btn-primary');
        cardButton.innerHTML = 'See More'
        cardBody.appendChild(cardButton);
        cardOutput.appendChild(card);
  }
}

// Create six product cards for featured products section on homepage
createCards(allProducts, 6, 'featured-products-inner');