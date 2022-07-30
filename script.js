
const cartItem = document.querySelectorAll(".cart-detalis");
const removeCartBtn = document.querySelectorAll(".btn-remove");

const productPrice = document.querySelectorAll(".cart-price");
const inputValue = document.querySelectorAll(".quantity-input");
const totalCart = document.querySelector(".total-price");
const cartRows = document.querySelector(".cart-row ");
const cartItems = document.querySelectorAll(".cart-items");

const totalPrice = function () {
  let total = 0;
  productPrice.forEach((e, m) => {
    let price = parseFloat(e.innerText.replace("$", ""));
    let input = inputValue[m].value;
    total = total + price * input;
    // console.log(e);
    //  console.log(inputValue[m].value);
    //  console.log(price);
  });
  totalCart.innerText = "$" + total;
  // console.log(total);
};
totalPrice();
const changeInputValue = function () {
  //   inputValue.forEach((e) => () => {
  //     let input = inputValue[e];
  //         input.addEventListener("change", function () {
  //         totalPrice();
  //         });
  //   }

  //   );
  for (let i = 0; i < inputValue.length; i++) {
    let input = inputValue[i];
    input.addEventListener("change", function () {
      totalPrice();
    });
  }
  // totalPrice();
};
changeInputValue();

const removeButton = function () {
  removeCartBtn.forEach((e, m) =>
    e.addEventListener("click", () => {
      cartItem[m].remove();
      totalPrice();
      //   console.log(cartItem[m]);
    })
  );
};
removeButton();
////////Add to the cart button
const addToCart = document.querySelectorAll(".add-cart-btn");
const shoppingItem = document.querySelectorAll(".shopping-item");
// const price = document.querySelectorAll(".price")[0].innerHTML;
// const title = document.querySelectorAll(".title")[0].innerHTML;
// const image = document.querySelectorAll(".item-img")[0].src;
const cartItemIN = document.querySelector(".cart-items");

// addToCart.forEach((e) =>
//   e.addEventListener("click", () => {
//     let button = addToCart[e];
//     addNewProduct();
//   })
// );
for (let i = 0; i < addToCart.length; i++) {
  let button = addToCart[i];
  button.addEventListener("click", addNewProduct);
  // cartTotal()
}
function addNewProduct(e) {
  let button = e.target;
   let item = button.parentElement;
   const price = item.querySelectorAll(".price")[0].innerHTML;
   const title = item.querySelectorAll(".title")[0].innerHTML;
   const image = item.querySelectorAll(".item-img")[0].src;
   console.log(button);
  const html = `
    <div class="cart-row cart-detalis">
            <div class="cart-item">
              <img class="item-img" src="${image}" />
              <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price">${price}</span>
            <div class="cart-quantity">
              <input class="quantity-input" type="number" value="2" min="1" />
              <button class="btn-remove" type="button">REMOVE</button>
            </div>
          </div>
    `;
  cartRows.insertAdjacentHTML("afterend", html);
  totalPrice();
}
// // addToCart.forEach((e)=>e.addEventListener("click",function(){
// //     const html = `
// //     <div class="cart-item">
// //               <img class="item-img" src="${image}" />
// //               <span class="cart-item-title">${title}</span>
// //             </div>
// //             <span class="cart-price">${price}</span>
// //             <div class="cart-quantity">
// //               <input class="quantity-input" type="number" value="2" min="1" />
// //               <button class="btn-remove" type="button">REMOVE</button>
// //             </div>
// //     `;
// //    cartItemIN.insertAdjacentHTML("afterend", html);
// // console.log(e);
// // }))
console.log("hhhh");