document.addEventListener("click", (e) => {
  let tar = e.target;
  if (tar.name == "toggle") tar.removeAttribute("class");
});

//selecting elements for dark mode buttons
const darkModeButton = document.getElementById("DM-button");
const lightModeButton = document.getElementById("LM-button");
const bodyElement = document.querySelector("body");

//apply saved dark mode settings from local storage
if (localStorage.backColor) {
  bodyElement.style.backgroundColor = localStorage.backColor;
} else {
  bodyElement.style.backgroundColor = "#000000";
}
if (localStorage.textColor) {
  bodyElement.style.color = localStorage.textColor;
} else {
  bodyElement.style.color = "#ffffff";
}

//light mode button event
lightModeButton.addEventListener("click", function (event) {
  let backColor = "#ffffff";
  let textColor = "#000000";
  bodyElement.style.backgroundColor = backColor;
  bodyElement.style.color = textColor;
  localStorage.backColor = backColor;
  localStorage.textColor = textColor;
});

//dark mode button event
darkModeButton.addEventListener("click", function (event) {
  let backColor = "#000000";
  let textColor = "#ffffff";
  bodyElement.style.backgroundColor = backColor;
  bodyElement.style.color = textColor;
  localStorage.backColor = backColor;
  localStorage.textColor = textColor;
});

/* add to cart function */
const addToCartButton = document.getElementById("add-to-cart");

if (addToCartButton) {
  addToCartButton.addEventListener("click", function () {
    /* select product details */
    let imageSrc = document.querySelector(".product-page-images")?.src;
    let nameElement = document.getElementById("product-name");
    let priceElement = document.querySelector(".price-tag");

    /* testing if the information is in the browser */
    console.log("image Source:", imageSrc);
    console.log("Product Name Element:", nameElement);
    console.log("Price Element:", priceElement);

    /* ensure elements exist before reading properties to avoid errors */
    if (!nameElement || !priceElement) {
      console.error("Error: Product details not found!");
      return; /* stop working if elements are missing */
    }

    let name = nameElement.textContent;
    let price = priceElement.textContent;

    /* creating product object */
    let product = {
      image: imageSrc,
      name: name,
      price: price,
    };

    /*create an empty array in local storage */
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    /* add new product to the cart array */
    cart.push(product);

    /* save updated cart back to localStorage */
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(
      "Added to Cart!"
    ); /* this gives a notification at the top of screen when the product is added */
  });
}

function loadCart() {
  /* getting the container where items exist */
  let cartContainer = document.getElementById("cart-items");

  /* ensure the cart container exists (only run this on the cart page and nowhere else boiiiii) */
  if (!cartContainer) {
    console.warn("Cart page not detected, skipping loadCart()");
    return;
  }

  /* get data from the storage or set an empty array if there isnt any data there */
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  /* clear previous content */
  cartContainer.innerHTML = "";

  /* show empty cart message when there are no items in the storage*/
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your Cart is empty</p>";
    return;
  }

  /* loop through cart items and display them all */
  cart.forEach((product, index) => {
    let item = document.createElement("div");
    item.classList.add("cart-item");

    item.innerHTML = `
      <img src="${product.image}" width="80%">
      <p>${product.name}</p> 
      <p>${product.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
      `; /* $ this inserts variables into a string */
    /* adding the item to the container */
    cartContainer.appendChild(item);
  });
}

/* run load cart only if we are on the cart page */
window.onload = function () {
  loadCart();
};

function removeFromCart(index) {
  /* same as load cart */
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  /* remove the selected item from the cart array */
  cart.splice(index, 1);

  /* save updated cart back to local storage */
  localStorage.setItem("cart", JSON.stringify(cart));

  /* reload the cart display */
  loadCart();
}
