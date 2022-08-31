var fName = document.querySelector("#fname");
var lName = document.querySelector("#lname");
var phone = document.querySelector("#phone");
var mail = document.querySelector("#mail");
var message = document.querySelector("#message");
var btn = document.querySelector(".btn-submit");
var fnameFlag, lnameFlag, phoneFlag, mailFlag, messageFlag;

//------------------------form verfication---------------------------------
fname.addEventListener("input", function (e) {
  var feedback = document.querySelector(".fname-valid-feedback");
  var regx = /[a-zA-Z]/;
  regx.test(e.target.value)
    ? (feedback.classList.remove("d-none"),
      (e.target.style.borderColor = "gray"),
      (fnameFlag = 1))
    : (feedback.classList.add("d-none"),
      (e.target.style.borderColor = "red"),
      (fnameFlag = 0));
});

lname.addEventListener("input", function (e) {
  var feedback = document.querySelector(".lname-valid-feedback");
  var regx = /[a-zA-Z]/;
  regx.test(e.target.value)
    ? (feedback.classList.remove("d-none"),
      (e.target.style.borderColor = "gray"),
      (lnameFlag = 1))
    : (feedback.classList.add("d-none"),
      (e.target.style.borderColor = "red"),
      (lnameFlag = 0));
});

mail.addEventListener("change", function (e) {
  var feedback = document.querySelector(".mail-valid-feedback");
  var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regx.test(e.target.value)
    ? (feedback.classList.remove("d-none"),
      (e.target.style.borderColor = "gray"),
      (mailFlag = 1))
    : (feedback.classList.add("d-none"),
      (e.target.style.borderColor = "red"),
      (mailFlag = 0));
});

phone.addEventListener("change", function (e) {
  var feedback = document.querySelector(".phone-valid-feedback");
  var regx = new RegExp("^011|010|012[0-9]{8}");

  regx.test(e.target.value) &&
  e.target.value.length == 11 &&
  Number(e.target.value)
    ? (feedback.classList.remove("d-none"),
      (e.target.style.borderColor = "gray"),
      (phoneFlag = 1))
    : (feedback.classList.add("d-none"),
      (e.target.style.borderColor = "red"),
      (phoneFlag = 0));
});

message.addEventListener("change", function (e) {
  var feedback = document.querySelector(".message-valid-feedback");
  var regx = /(?=.{1,})/;
  regx.test(e.target.value)
    ? (feedback.classList.remove("d-none"),
      (e.target.style.borderColor = "gray"),
      (messageFlag = 1))
    : (feedback.classList.add("d-none"),
      (e.target.style.borderColor = "red"),
      (messageFlag = 0));
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if ((fnameFlag, lnameFlag, phoneFlag, mailFlag, messageFlag)) {
    var contactUsContainer = document.querySelector(".contact-us-container");
    contactUsContainer.children[0].classList.add("d-none");
    contactUsContainer.insertAdjacentHTML(
      "beforeend",

      `<div class="m-5 row justify-content-center">
    <div class="col-6 m-5  form-dynamic" id="container-success" style="display: flex;">
    <img src="./imgs/sent-success.6daaa3e248143f3f4f7eccca37e6a389.svg">
  <p id="success-message">thank you for your feedback.</p></div>
  </div>`
    );
  } else {
    var contactUsContainer = document.querySelector(".contact-us-container");
    //contactUsContainer.children[0].classList.add("d-none");
    contactUsContainer.insertAdjacentHTML(
      "afterbegin",

      `<div class="m-5 row justify-content-center">
    *please validate your data*
  </div>`
    );
  }
});

var btnForm = document.querySelector(".btn-form");
var contacUS = document.querySelector(".contact-us-container");
var starter = document.querySelector(".contact-us-starter");
btnForm.addEventListener("click", function () {
  contacUS.classList.remove("d-none");
  starter.classList.add("d-none");
});

var cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);
var cartNumber = document.querySelector(".cart-num");
cartNumber.innerText = getCookie("cartNum") || 0;
//-------------cookies---------------------
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
//----------------show cart button event-------------------------------
var cartBtn = document.querySelector(".cart");
cartBtn.addEventListener("click", function () {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelector(".cart-list").classList.toggle("d-none");
  showCart(cart);
});
localStorage.setItem("cart", JSON.stringify(cart));
