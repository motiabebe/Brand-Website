const phones = [
    {
        name: "Samsung Galaxy S20",
        old_price: 999,
        price: 799,
        image: "img/phones/S20.jpg",
        description: "6.2-inch AMOLED display, triple-lens rear camera, 10MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S20+",
        old_price: 1199,
        price: 999,
        image: "img/phones/S20+.jpg",
        description: "6.7-inch AMOLED display, triple-lens rear camera, 10MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S20 Ultra",
        old_price: 1399,
        price: 1199,
        image: "img/phones/S20Ultra.jpg",
        description: "6.9-inch AMOLED display, quad-lens rear camera, 40MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S21 5G",
        old_price: 1099,
        price: 899,
        image: "img/phones/S215G.jpg",
        description: "6.2-inch AMOLED display, triple-lens rear camera, 40MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S21+ 5G",
        old_price: 1299,
        price: 1099,
        image: "img/phones/S21+5G.jpg",
        description: "6.7-inch AMOLED display, triple-lens rear camera, 40MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S21 Ultra 5G",
        old_price: 1499,
        price: 1299,
        image: "img/phones/S21Ultra5G.jpg",
        description: "6.8-inch AMOLED display, quad-lens rear camera, 40MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S22 5G",
        old_price: 1199,
        price: 999,
        image: "img/phones/S225G.jpg",
        description: "6.1-inch AMOLED display, triple-lens rear camera, 10MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S22+ 5G",
        old_price: 1499,
        price: 1299,
        image: "img/phones/S22+5G.jpg",
        description: "6.6-inch AMOLED display, triple-lens rear camera, 10MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S22 Ultra 5G",
        old_price: 1699,
        price: 1499,
        image: "img/phones/S22Ultra5G.jpg",
        description: "6.8-inch AMOLED display, quad-lens rear camera, 40MP front-facing camera",
    },
];

const exploreSection = document.getElementById("explore-phones");

phones.forEach((phone) => {
    exploreSection.innerHTML += `                
    <div class="col-lg-3 col-sm-12">
        <div class="card border-0">
            <img src="${phone.image}" class="card-img-top" alt="${phone.name}">
            <!-- 456 466 -->
            <div class="card-body rounded-bottom py-4">
                <p class="card-title h5">${phone.name}</p>
                <p class="card-text small">${phone.description}</p>
                <p class="card-text h3"><span class="text-decoration-line-through text-danger h1">$${phone.old_price}</span>  $${phone.price}</p>
                <a href="" class="btn btn-outline-dark rounder">Buy now</a>
                <a href="#specs" class="btn bg-black btn-dark rounder">Learn more</a>
            </div>
        </div>
    </div>`
});

const promotionImage = document.getElementById("promotion-image");

function changeBackgroundPosition() {
    setTimeout(() => {
        promotionImage.style.backgroundPosition = "left";
    }, 3000);
    setTimeout(() => {
        promotionImage.style.backgroundPosition = "center";
    }, 6000);
    setTimeout(() => {
        promotionImage.style.transition = "background-size 2s ease-in-out";
        promotionImage.style.backgroundSize = "cover";
    }, 9000);
}

changeBackgroundPosition();



