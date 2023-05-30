const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const Products = [
    {
        id: 1,
        title: "Air Force",
       // desc: "The Nike Air Force 1 is a classic and iconic sneaker loved by sneaker enthusiasts for its timeless design, durable leather upper, and comfortable cushioning. With its versatile style and superior craftsmanship, it's a must-have shoe that effortlessly blends street fashion with everyday comfort.",
        price: 199,
        colors: [
            {
                code: "black",
                img: "./img/af_bl.png",
            },
            {
                code: "white",
                img: "./img_wh.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 190,
        colors: [
            {
                code: "black",
                img: "./img/jordan_bw.png",
            },
            {
                code: "white",
                img: "./img/jordan_bw.png",
            },
        ],
    },
    {
        id: 3,
        title: "Nike Blazer",
        price: 199,
        colors: [
            {
                code: "black",
                img: "./img/blazer_bl.png",
            },
            {
                code: "white",
                img: "./img/blazers.png",
            },
        ],
    },
    {
        id: 4,
        title: "SB Dunks",
        price: 199,
        colors: [
            {
                code: "black",
                img: "./img/sb_bl.png",
            },
            {
                code: "white",
                img: "./img/sb_wh.png",
            },
        ],
    },
    {
        id: 5,
        title: "Air Max",
        price: 199,
        colors: [
            {
                code: "black",
                img: "./img/max_bl.png",
            },
            {
                code: "white",
                img: "./img/max_wh.png",
            },
        ],
    },
]

let choosenProduct = Products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
//const currentProducDesc = document.querySelectorAll(".productDesc")

menuItems.forEach((item, index)=> {
    item.addEventListener("click", ()=> {
        //change the current slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;

        //change the chosen product
        choosenProduct = Products[index]

        //change texts of current product
        currentProductTitle.textContent = choosenProduct.title
        //currentProducDesc.textContent = choosenProduct.desc
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img;

        
        currentProductColors.forEach((color,index) => {
            color.style.backgroumdColor = choosenProduct.colors[index].code;
        });
    });

    currentProductColors.forEach((color,index) => {
        color.addEventListener("click", ()=>{
            currentProductImg.src = choosenProduct.colors[index].img;
        })
    })
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor= "white";
            size.style.color= "black";
        })
        size.style.backgroundColor= "black";
        size.style.color= "white";
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=> {
    payment.style.display = "flex";
})

close.addEventListener("click",()=> {
    payment.style.display = "none";
})