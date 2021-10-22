// let inputEl = document.createElement("input");
// inputEl.type = "text";
// inputEl.className = "myInput text-white font-bold";

// parentEl.appendChild(inputEl);

const parentEl = document.getElementById("parent");
let parentCSS = parentEl.style
// parentCSS.border = "solid";
parentCSS.fontSize = "200px";
parentCSS.width = "100%"
parentCSS.height = "1000px"
parentCSS.padding = "0px 225px 0px 225px"
parentCSS.display = "flex"
parentCSS.justifyContent ="space-between"
parentCSS.flexWrap = "wrap"
for (let i = 0; i < 7; i++) {
    // Box
    let product = document.createElement("div");
    parentEl.appendChild(product);
    product.className = "product"
    let image = document.createElement("img")
    product.appendChild(image)
    let word  = document.createElement("p")
    product.appendChild(word);
    let price = document.createElement("p")
    product.appendChild(price)
    let productCSS = product.style
    productCSS.width = "32%"
    // productCSS.padding = "24px"
    productCSS.height = "450px"
    // productCSS.border = "1px solid"
    productCSS.margin = "0px 0px 40px 0px"
    productCSS.padding = "0px 0px 20px 0px"
    productCSS.backgroundColor = "rgba(249,250,251)"
    productCSS.borderRadius="0.5rem"
    productCSS.boxSizing = "border-box" 
    // Box
    // Image
    let imageCSS = image.style
    image.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FCE6zbBdaR9O8ixpQ16t6&w=1920&q=75"
    imageCSS.height = "72%"
    imageCSS.width = " 87%"
    imageCSS.margin = "20px 0px 0px 20px"
    // Image
    // Word
    word.innerText = "Unisex Long Sleeve Tee"
    let wordCSS = word.style
    wordCSS.fontSize = "1.125rem"
    wordCSS.fontWeight = "600"
    wordCSS.color = "rgba(31,41,55,var(--tw-text-opacity))"
    wordCSS.display = "flex"
    wordCSS.justifyContent = "center"
    wordCSS.fontFamily = "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
    wordCSS.margin = "0px 0px 10px 0px"
    // Word
    // Price
    price.innerText = "£1.00"
    let priceCSS = price.style
    priceCSS.fontFamily = "f system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
    priceCSS.fontSize = ".875rem"
    priceCSS.display = "flex"
    priceCSS.justifyContent = "center"
    priceCSS.color = "grey"
    priceCSS.padding = "0px 0px 20px 0px"
    // Price
}


