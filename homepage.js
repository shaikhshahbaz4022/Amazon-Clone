//slide show javascript code --->
var img =
    [   "https://m.media-amazon.com/images/I/915O61IvnUL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/81KqtuapUzL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/812phdLubGL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/81EZPF-FSdL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/71JylaoMg+L._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/815BiHeuZFL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/81wTyICVgGL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/71lPBe68P5L._SX3000_.jpg"
    ]

var cont = document.getElementById("slideshow");
var i = 0;
setInterval(() => {

    cont.innerHTML = ""
    if (i == img.length - 1) {
        i = 0;
    }

    var imggg = document.createElement("img");
    imggg.src = img[i]
    i++;
    cont.append(imggg);

}, 3000);
// --->
let leftbtn = document.querySelector(".btn-l");
let rightbtn = document.querySelector(".btn-r");


rightbtn.addEventListener("click",(e)=>{
let x = document.querySelector(".product-slide");
x.scrollLeft += 800;
e.preventDefault()
});

leftbtn.addEventListener("click",(e)=>{
    let x = document.querySelector(".product-slide");
    x.scrollLeft -= 800;
    e.preventDefault()
    })
    

