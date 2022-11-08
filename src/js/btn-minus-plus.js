let btnMinus = document.querySelectorAll('.minus-button');
let btnPlus = document.querySelectorAll('.plus-button');
let productPageQty = document.querySelector('.product-page-quantity');

btnMinus.forEach((button) => {
   button.addEventListener('click', () => {
      if(productPageQty.value <= 1){
         return 1;
      } else{
         productPageQty.value--;
      }
      
   });
})

btnPlus.forEach((button) => {
   button.addEventListener('click', () => {
      productPageQty.value++;
   });
})


