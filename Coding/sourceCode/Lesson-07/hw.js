// let inputEl = document.createElement("input");
// inputEl.type = "text";
// inputEl.className = "myInput text-white font-bold";

// parentEl.appendChild(inputEl);

const parentEl = document.getElementById("parent");
let parentCSS = parentEl.style
parentCSS.border = "solid";
parentCSS.fontSize = "200px";
parentCSS.width = "100%"
parentCSS.height = "1000px"
parentCSS.padding = "10px 100px 0px 100px"
parentCSS.display = "flex"
parentCSS.justifyContent ="center"
parentCSS.flexWrap = "wrap"


for (let i = 0; i < 6; i++) {
    let product = document.createElement("div");
    parentEl.appendChild(product);
    product.className = "product"
    let word = document.createElement("p")
    product.appendChild(word);
    let image = document.createElement("img")
    product.appendChild(image)
    let productCSS = product.style
    productCSS.width = "28%"
    productCSS.padding = "24px"
    productCSS.height = "500px"
    productCSS.border = "solid"
    productCSS.margin = "0px 0px 40px 0px"
    productCSS.backgroundColor = "rgba(249,250,251,var(--tw-bg-opacity))"
    productCSS.borderRadius="0.5rem"
    productCSS.boxSizing = "border-box"
}