const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const Products = [
    {
        id: 1,
        title: "Air Force",
        desc: "The Nike Air Force 1 is a classic and iconic sneaker loved by sneaker enthusiasts for its timeless design, durable leather upper, and comfortable cushioning. With its versatile style and superior craftsmanship, it's a must-have shoe that effortlessly blends street fashion with everyday comfort.",
        price: 199.99,
        colors: [
            {
                code: "black",
                img: "./img/af_bl.png",
            },
            {
                code: "white",
                img: "./img/af_wh.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        desc: "The Air Jordan is a legendary basketball shoe that revolutionized the industry. With its innovative design, cutting-edge technology, and signature style, it has become a symbol of athletic excellence and sneaker culture.",
        price: 179.99,
        colors: [
            {
                code: "black & white",
                img: "./img/jordan_bw.png",
            },
            {
                code: "#86b3d6",
                img: "./img/jordan_blue.png",
            },
        ],
    },
    {
        id: 3,
        title: "Nike Blazer",
        desc: "The Nike Blazer is a versatile and stylish sneaker that offers a retro-inspired look. It features a low-cut design, premium materials, and a comfortable fit, making it perfect for everyday wear.",
        price: 104.99,
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
        desc: "The SB Dunks are skateboarding shoes designed for performance and style. With their durable construction, responsive cushioning, and eye-catching designs, they are the go-to choice for skateboarders and sneaker enthusiasts alike.",
        price: 119.99,
        colors: [
            {
                code: "#a9aeb3",
                img: "./img/sb_grey.png",
            },
            {
                code: "#263f6a",
                img: "./img/sb.png",
            },
        ],
    },
    {
        id: 5,
        title: "Air Max",
        desc: "The Air Max is a classic Nike sneaker known for its visible Air cushioning unit and sleek design. It offers exceptional comfort and impact protection, making it a popular choice for both athletes and casual wearers.",
        price: 159.99,
        colors: [
            {
                code: "#16bed8",
                img: "./img/max_blue.png",
            },
            {
                code: "#d83d38",
                img: "./img/max_red.png",
            },
        ],
    },
];

let chosenProduct = Products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Change the chosen product
        chosenProduct = Products[index];

        // Change texts of current product
        currentProductTitle.textContent = chosenProduct.title;
        currentProductDesc.textContent = chosenProduct.desc;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        currentProductColors.forEach((color, colorIndex) => {
            color.style.backgroundColor = chosenProduct.colors[colorIndex].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});
