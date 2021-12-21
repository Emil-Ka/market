"use strict";

document.addEventListener("DOMContentLoaded", () => {
   const productsDB = {
      name: [],
      price: [],
      count: []
   };

   let form = document.querySelector('form');
   const block = document.querySelector('.main__container'),
         trash = document.querySelectorAll(".product__trash");

   form.addEventListener("submit", (event) => {
      event.preventDefault();

      let productName = form.querySelector('#product-name').value,
      productPrice = form.querySelector('#product-price').value,
      productCount = form.querySelector('#product-count').value;

      if (productName.length > 21) {
         productName = productName.substring(0, 32) + "...";
      }

      addNewProduct(productName, productPrice, productCount);
      block.innerHTML = "";
      addList();
      form.reset();
   });

   const addNewProduct = (productName, productPrice, productCount) => {
      productsDB.name.push(productName);
      productsDB.price.push(productPrice);
      productsDB.count.push(productCount);
   };

   const addList = () => {
      for (let i = 0; i < productsDB.name.length; i++) {
         block.innerHTML += `
            <div class="main__product product">
               <p class="product__name">${productsDB.name[i]}</p>
               <p class="product__price">${productsDB.price[i]} ₽</p>
               <p class="product__count">${productsDB.count[i]} шт.</p>
               <img src="img/trash.png" alt="Удалить" class="product__trash">
            </div>
         `;
      }
   };
   
});