const parentEl = document.getElementById("parent");
for (let i = 0; i < 7; i++) {
    let product = document.createElement("div");
    product.id = "productMain"
    parentEl.appendChild(product)
//Product
let pr1 = document.createElement("article")
//Img
let image1 = document.createElement("img")
image1.className = "img"
image1.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FCE6zbBdaR9O8ixpQ16t6&w=1920&q=75"
pr1.appendChild(image1)
//Text
let text1 = document.createElement("p")
text1.className = "text"
text1.innerText = "Unisex Long Sleeve Tee"
pr1.appendChild(text1);
//Price
let price1 = document.createElement("p")
price1.className = "price"
price1.innerText = "£1.00"
pr1.appendChild(price1);
product.appendChild(pr1);
if(i == 1){
image1.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FzWiDwpcQ8msYs0JYm7o2&w=1920&q=75"
text1.innerText = "Snapback"
} else if (i == 2){
    image1.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FG0GMUFSPQoyzuYjiRdjw&w=1920&q=75"
    text1.innerText = "Unisex Zip hoodie"
} else if (i==3){
image1.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2F9PMP8m9KSTuL6yH0loET&w=1920&q=75"
text1.innerText = "Mug"
} else if (i ==4){
image1.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FosJ4arNrTNykmUji9qIK&w=1920&q=75"
text1.innerText = "Short Sleeve Tee"
} else if (i==5){
    image1.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FuXRQVf3wT2OvJBP3c7r0&w=1920&q=75"
    text1.innerText = "Tote Bag"
} else if (i == 6){
    image1.src = "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2F3qnaWF0SqieJL9tpWUxq&w=1920&q=75"
    text1.innerText = "Backpack"
}
}

