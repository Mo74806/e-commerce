var cart = JSON.parse(localStorage.getItem("cart")) || [];
var cartNumber = document.querySelector(".cart-num");
cartNumber.innerText = getCookie("cartNum") || 0;
console.log(cartNumber.innerText);
//cookies
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//-------------------------->render categories filter area <----------------------------------------
function RenderCategories(selectedArea) {
  var selectedCategory = document.querySelector(`${selectedArea}`);
  for (var i = 0; i < categories.length; i++) {
    selectedCategory.insertAdjacentHTML(
      "beforeend",
      `<div id="${categories[i].name}"class="card-category card col-lg-2 m-2 p-0 border border-0" style="width: 20rem">
      <img src=${categories[i].imagepath} class="card-img-top category-img" alt="...">
      <div class="card-body category-body">
        <h5 class="card-title category-title">${categories[i].name}</h5>
      </div>
    </div>`
    );
  }
}
//------------------------->show the products of the cart<---------------------------
function showCart(cart1) {
  var cartlist = document.querySelector(".cart-list-item");
  cartlist.innerHTML = "";
  var price = 0;
  cart1.map((item) => {
    console.log(item.price);
    return (price = price + item.price);
  });
  if (cart1.length == 0) {
    cartlist.insertAdjacentHTML(
      "afterbegin",

      `
       <div class="m-5 p-5 text-center"><i class="fap fa-x"></i>  <i class="fap fa-x"></i>  <i class="fap fa-x"></i><br/>NO PRODUCTS ADDED YET .</div>`
    );
  } else {
    cartlist.insertAdjacentHTML(
      "afterbegin",
      ` <li class="m-0 p-1 bg-dark grid border text-light   border-1px border-black">
<span class="item row justify-content-center align-items-center ">
      <span class="col-5 item-info total-price">
          <span>TOTAL PRICE</span>
      </span>
      <span class="col-3 item-info item-info-price">
          <span>${price}$
      </span>
  
  </span>
  <span class="col-4">
  <a class="btn btn-sm btn-success" href="./purches.html" >PURCECHES</a>
  </span>

</li>`
    );

    for (var i = 0; i < cart1.length; i++) {
      cartlist.insertAdjacentHTML(
        "beforeend",
        `
      <li class="item${cart1[i].id} m-0 p-1 grid border    border-1px border-black">
        <span class="item row justify-content-between align-items-center ">
          
              <img class="col-2 img-cart" src="./${cart1[i].imagepath}" alt="" />
              <span class="col-5 item-info">
                  <span>${cart1[i].name}</span>
              </span>
              <span class="col-3 item-info item-info-price">
                  <span>${cart1[i].price} $</span>
              </span>
              <span class="col-2 item-info">
                  <button id=${cart1[i].id} class="justify-self-end btn btn-del btn-danger">X</button>
              </span>
              </span>
          </span>
      
    </li>`
      );
    }
  }
  //handle removing items from the cart
  var btnDel = document.querySelectorAll(".btn-del");
  for (var i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener("click", function (e) {
      var totalPrice = document.querySelector(".item-info-price span");
      console.log(cart1);
      console.log(this.id);
      var index = cart1.findIndex((item) => item.id == this.id);

      console.log(index);
      cart1 = cart1.filter((_, i) => index != i);
      cartNumber.innerText = parseInt(cartNumber.innerText) - 1;
      document.querySelector(".item" + this.id).remove();
      localStorage.setItem("cart", JSON.stringify(cart1));
      setCookie("cartNum", cartNumber.innerText, 1);
      price = 0;
      cart1.map((item) => {
        console.log(item.price);
        return (price = price + item.price);
      });
      totalPrice.innerText = price + "$";
    });
  }
}
//show cart button event
var cartBtn = document.querySelector(".cart");
cartBtn.addEventListener("click", function () {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelector(".cart-list").classList.toggle("d-none");
  showCart(cart);
});
localStorage.setItem("cart", JSON.stringify(cart));
