var productsCart = document.querySelectorAll(".btn-add");
var cart = [];
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var cartNumber = document.querySelector(".cart-num");
cartNumber.innerText = getCookie("cartNum") || 0;
var categories = [
  { name: "laptop", imagepath: "./imgs/laptop.jpg" },
  { name: "mobile", imagepath: "./imgs/phones.jpg" },
  { name: "clothes", imagepath: "./imgs/clothes.jpg" },
];
RenderCategories(".categories-filter"); //render the category filter area
var data = [
  {
    id: 1,
    imagepath: "imgs/categories/laptop/1.png",
    name: "Lenovo V14",
    price: 6299,
    description:
      "Lenovo Lenovo V14 Laptop - Ryzen 3 - 4GB RAM - 1 TB HDD - 14 Inch FHD - AMD RADEON Graphics - Dos - Iron Grey",
    category: "laptop",
  },
  {
    id: 2,
    imagepath: "imgs/categories/laptop/2.png",
    name: "G15 5511",
    price: 23499,
    description:
      "DELL G15 5511 Gaming Laptop - Intel Core I7-11800H - 16GB RAM - 512GB SSD - NVIDIA GeForce RTX 3050 4GB -15.6 Inch FHD 120Hz Display - Ubuntu - DARK SHADOW GREY",
    category: "laptop",
  },
  {
    id: 3,
    imagepath: "imgs/categories/laptop/3.png",
    name: "G 33500",
    price: 15199,
    description:
      "DELL G3 15-3500 Gaming Laptop - Intel Core I5-10300H - 8GB RAM - 256GB SSD + 1TB HDD - 15.6-inch Full HD - 4GB GPU - Ubuntu - Black",
    category: "laptop",
  },
  {
    id: 4,
    imagepath: "imgs/categories/laptop/4.png",
    name: "VOSTRO 3510",
    price: 16999,
    description:
      "DELL Vostro 3510 - Intel Core I7 - 16GB RAM - 1TB HDD - 512GB SSD - 15.6-inch FHD - 2GB GPU - Windows 11 Pro - Carbon Black",
    category: "laptop",
  },
  {
    id: 5,
    imagepath: "imgs/categories/laptop/5.png",
    name: "Pavilion 15",
    price: 16950,
    description:
      "HP Pavilion 15-dk2085ne Gaming Laptop - Intel Corei5-11300H - 8GB RAM - 1TB HDD + 256GB SSD - 15.6-inch FHD - NVIDIA GeForce GTX 1650 4GB GPU - DOS - Black - English/Arabic Keyboard",
    category: "laptop",
  },
  {
    id: 6,
    imagepath: "imgs/categories/laptop/6.png",
    name: "VOSTRO3510",
    price: 15499,
    description:
      "DELL Vostro 3510 - Intel Core I7 - 16GB RAM - 1TB HDD - 256GB SSD - 15.6-inch FHD - 2GB GPU - DOS - Carbon Black",
    category: "laptop",
  },
  {
    id: 7,
    imagepath: "imgs/categories/laptop/7.png",
    name: "Inspiron-3511",
    price: 10999,
    description:
      "THDELL Inspiron 3511 Laptop - Intel Core I3-1115G4 - 8GB RAM - 1TB HDD - 128GB SSD - 15.6-inch - Intel HD GPU - Windows 10 - Black",
    category: "laptop",
  },
  {
    id: 8,
    imagepath: "imgs/categories/laptop/8.png",
    name: "1165G7",
    price: 37999,
    description:
      "DELL Latitude 7420 Notebook - Intel Core I71165G7 - 16GB RAM - 512GB SSD -14” Display Full HD - Ubuntu Linux 20.04 - Black",
    category: "laptop",
  },
  {
    id: 9,
    imagepath: "imgs/categories/mobiles/1.png",
    name: "N6",
    price: 1099,
    description: "iQ&T N6 - 6.1-inch 16GB/2GB Mobile Phone - Gold",
    category: "mobile",
  },
  {
    id: 10,
    imagepath: "imgs/categories/mobiles/2.png",
    name: "Redmi Note 10S",
    price: 5799,
    description:
      "XIAOMI Redmi Note 10S - 6.43-inch 128GB/6GB Dual Sim 4G Mobile Phone - Pebble White",
    category: "mobile",
  },
  {
    id: 11,
    imagepath: "imgs/categories/mobiles/3.png",
    name: "C1",
    price: 1440,
    description:
      "Nokia C1 - 5.45-inch 16GB/1GB Dual SIM Mobile Phone - Charcoal",
    category: "mobile",
  },
  {
    id: 12,
    imagepath: "imgs/categories/mobiles/4.png",
    name: "Note-11",
    price: 4299,
    description:
      "Infinix Note 11 – 6.7-inch 128GB/6GB Dual SIM 4G Mobile Phone – Graphite Black",
    category: "mobile",
  },
  {
    id: 13,
    imagepath: "imgs/categories/mobiles/5.png",
    name: "CPH2325",
    price: 6190,
    description:
      "OPPO A55 - 6.51-inch 128GB/4GB Dual SIM 4G Mobile Phone - Rainbow Blue",
    category: "mobile",
  },
  {
    id: 14,
    imagepath: "imgs/categories/mobiles/6.png",
    name: "G20",
    price: 3175,
    description:
      "Nokia G20 - 6.52-inch 128GB/4GB Dual Sim Mobile Phone - Dark Blue",
    category: "mobile",
  },
  {
    id: 15,
    imagepath: "imgs/categories/mobiles/7.png",
    name: "Galaxy S21+",
    price: 19499,
    description:
      "Samsung Galaxy S21+ - 6.7-inch 256GB/8GB Dual SIM 5G Mobile Phone - Phantom Violet",
    category: "mobile",
  },
  {
    id: 16,
    imagepath: "imgs/categories/mobiles/8.png",
    name: "Galaxy S21+",
    price: 19499,
    description:
      "Samsung Galaxy S21+ - 6.7-inch 256GB/8GB Dual SIM 5G Mobile Phone - Phantom Silver",
    category: "mobile",
  },
  {
    id: 17,
    imagepath: "imgs/categories/clothes/1.png",
    name: "Ho Holland",
    price: 199,
    description: "Ho Holland Men's Polo Shirt - Multi Color",
    category: "clothes",
  },
  {
    id: 18,
    imagepath: "imgs/categories/clothes/2.png",
    name: "Izor Slip ",
    price: 129,
    description:
      "Brand: American Eagle | Similar products from American Eagle|On Solid Cotton Cargo Shorts - Heather Charcoal",
    category: "clothes",
  },
  {
    id: 19,
    imagepath: "imgs/categories/clothes/3.png",
    name: "Sleeve Shirt",
    price: 249,
    description:
      "Defacto Man Woven Modern Fit Buttondown Polo Neck Long Sleeve Shirt - Black",
    category: "clothes",
  },
  {
    id: 20,
    imagepath: "imgs/categories/clothes/4.png",
    name: "Straight Jean",
    price: 660,
    description: "Brand: American Eagle | Similar products from American Eagle",
    category: "clothes",
  },
  {
    id: 21,
    imagepath: "imgs/categories/clothes/5.png",
    name: "Cargo Shorts",
    price: 350,
    description:
      "Brand: American Eagle | Similar products from American Eagle|On Solid Cotton Cargo Shorts - Heat",
    category: "clothes",
  },
  {
    id: 22,
    imagepath: "imgs/categories/clothes/6.png",
    name: "polo T-shirt",
    price: 330,
    description: "American Eagle Pique Polo Shirt",
    category: "clothes",
  },
  {
    id: 23,
    imagepath: "imgs/categories/clothes/7.png",
    name: "Sleeves Shirt",
    price: 213,
    description: "Andora Down Buttoned Plain Simon Long Sleeves Shirt",
    category: "clothes",
  },
  {
    id: 24,
    imagepath: "imgs/categories/clothes/8.png",
    name: "Cotton Shirt",
    price: 173,
    description:
      "Fashion Men's Baggy Cotton Linen Solid Short Sleeve Button Shirt",
    category: "clothes",
  },
];
//----------------------------->slider functionality<---------------------------------------
{
  var slideIndex = 1;
  var slides = document.querySelectorAll("#slider"); //hold the image container
  var arr = [
    "imgs/nike1.webp",
    "imgs/nike2.webp",
    "imgs/4.jpg",
    "https://themes.laborator.co/aurum/fashion/wp-content/uploads/2014/11/photo-1416339442236-8ceb164046f8-1140x640.jpeg",
    "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ]; //the images array

  function previousSlide() {
    slideIndex -= 1;
    showSlide(slideIndex);
  }

  function nextSlide() {
    slideIndex += 1;
    showSlide(slideIndex);
  }

  function showSlide(n) {
    if (n > arr.length) slideIndex = 1;
    if (n == -1) slideIndex = arr.length - 1;
    slides[0].setAttribute("src", arr[slideIndex - 1]);
  }

  setInterval(nextSlide, 2000); //auto slide after 3 seconds
}
//--------------------------->render products based on specific category <--------------------------------------
function categoryAllProducts(categoryName, number, selectedArea) {
  document.querySelector(".categories").classList.remove("d-none"); //make the container visable
  document.querySelector(".categories .category-section-title").innerText =
    categoryName.toUpperCase(); //add the section title
  var categoryProducts = []; //get the products of the choosen category
  for (var i = 0; i < data.length; i++)
    if (categoryName == data[i].category) categoryProducts.push(data[i]);
  var selectedCategory = document.querySelector(`${selectedArea}`); //hold the area that will be place holder for the products
  selectedCategory.innerHTML = "";
  //add each category
  for (var i = 0; i < number; i++) {
    selectedCategory.insertAdjacentHTML(
      "beforeend",
      `<div  class="product col mb-3 d-flex justify-content-center">
          <div class="card card-product m-0 d-flex" style="width: 12rem;">
          <div class="card-image-container">
            <img src="${categoryProducts[i].imagepath}" class="card-img-top category-product-image" alt="...">
          </div>
            <div class="card-body grid ">
              <div class="product-title row">
                  <h5 class=" col-12 card-title" title="${categoryProducts[i].name}" >${categoryProducts[i].name}</h5>
              </div>
              <div class="row product-descrption">
                  <small class=" col-12 card-text">${categoryProducts[i].description}</small>
              </div>
              <div class="row">
                  <h5 class="col-5 card-title">${categoryProducts[i].price} $</h5>
                  <button id=${categoryProducts[i].id} title="Add To Your List" class="btn-add col-2 d-flex align-items-center justify-content-center btn border border-0"><i class="fa-solid fa-plus"></i></button>
                  <div class="offer">HOT OFFER</div>
                  </div>
              </div>
            </div>
            
          </div>
        `
    );
  }
  //handle adding product to the cart
  productsCart = document.querySelectorAll(".btn-add");
  for (var i = 0; i < productsCart.length; i++) {
    productsCart[i].addEventListener("click", function (e) {
      document.querySelector(".cart-list").classList.add("d-none"); //make the container hidden
      cart = JSON.parse(localStorage.getItem("cart")) || [];
      var index = data.findIndex((item) => item.id == this.id);
      cart.push(data[index]);
      cartNumber.innerText = parseInt(cartNumber.innerText) + 1;
      setCookie("cartNum", cartNumber.innerText, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  }
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
//---------------show cart button event-------------------------
var cartBtn = document.querySelector(".cart");
cartBtn.addEventListener("click", function () {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelector(".cart-list").classList.toggle("d-none");
  showCart(cart);
});

//--------------------show products based on category--------------
var categoriesArea = document.querySelectorAll(".card-category");
for (var i = 0; i < categoriesArea.length; i++) {
  categoriesArea[i].addEventListener("click", function (e) {
    categoryAllProducts(this.id, 4, ".selected-category");
    setCookie("selectedCategory", this.id, 1);
  });
}

//--------------cookies set and get functions-------------------
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
//go to category page
var showMoreBtn = document.querySelector(".show-more");
showMoreBtn.addEventListener("click", function () {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.replace("./category.html");
});
//store the cart in the local storage to use in other pages
localStorage.setItem("cart", JSON.stringify(cart));
