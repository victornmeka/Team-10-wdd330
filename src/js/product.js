import { setLocalStorage, getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import productDetails from "./productDetails.mjs";
// import { productCardTemplate } from "./productList.mjs";


// const test = productCardTemplate("sample");
const mainDiv = document.querySelector('#test');
mainDiv.insertAdjacentHTML("beforebegin",urlParams);

const productId = getParam('product');
productDetails(productId);

// console.log(findProductById(productId));


// add listener to Add to Cart button`
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);


