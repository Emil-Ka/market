"use strict";

document.addEventListener("DOMContentLoaded", () => {
   const productsDB = {};

   let form = document.querySelector('form');
   const block = document.querySelector('.main__container');

   form.addEventListener("submit", (event) => {
      event.preventDefault();

      let productName = form.querySelector('#product-name').value,
      productPrice = form.querySelector('#product-price').value,
      productCount = form.querySelector('#product-count').value;

      addNewProduct(productName, productPrice, productCount);
      addList();
      form.reset();
   });

   const addNewProduct = (productName, productPrice, productCount) => {
      productsDB.productName = [productName, productPrice, productCount];
   };

   const addList = () => {
      for (let item in productsDB) {
         block.innerHTML += `
            <div class="main__product product">
               <p class="product__name">${item[0]}</p>
               <p class="product__price">${item[1]} ₽</p>
               <p class="product__count">${item[2]} шт.</p>
               <img src="img/trash.png" alt="Удалить" class="product__trash">
            </div>
         `;
      }
   };
});