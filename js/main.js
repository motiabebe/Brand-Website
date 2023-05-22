const phones = [
    {
        name: "Samsung Galaxy S20",
        old_price: 999,
        price: 799,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-2.jpg",
        description: "6.2-inch AMOLED display, triple-lens rear camera, 10MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S20+",
        old_price: 1199,
        price: 999,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-plus-1.jpg",
        description: "6.7-inch AMOLED display, triple-lens rear camera, 10MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S20 Ultra",
        old_price: 1399,
        price: 1199,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-ultra-10.jpg",
        description: "6.9-inch AMOLED display, quad-lens rear camera, 40MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S21 5G",
        old_price: 1099,
        price: 899,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-1.jpg",
        description: "6.2-inch AMOLED display, triple-lens rear camera, 40MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S21+ 5G",
        old_price: 1299,
        price: 1099,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-plus-5g-1.jpg",
        description: "6.7-inch AMOLED display, triple-lens rear camera, 40MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S21 Ultra 5G",
        old_price: 1499,
        price: 1299,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg",
        description: "6.8-inch AMOLED display, quad-lens rear camera, 40MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S22 5G",
        old_price: 1199,
        price: 999,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-5g-2.jpg",
        description: "6.1-inch AMOLED display, triple-lens rear camera, 10MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S22+ 5G",
        old_price: 1499,
        price: 1299,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-plus-5g-2.jpg",
        description: "6.6-inch AMOLED display, triple-lens rear camera, 10MP front-facing camera",
    },
    {
        name: "Samsung Galaxy S22 Ultra 5G",
        old_price: 1699,
        price: 1499,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-2.jpg",
        description: "6.8-inch AMOLED display, quad-lens rear camera, 40MP front-facing camera",
    },
];


const exploreSection = document.getElementById("explore-phones");


phones.forEach((phone) => {
    exploreSection.innerHTML += `                
    <div class="col-lg-3 col-sm-12">
        <div class="card border-0">
            <img src="${phone.image}" class="card-img-top">
            <!-- 456 466 -->
            <div class="card-body rounded-bottom py-4">
                <h5 class="card-title h5">${phone.name}</h5>
                <p class="card-text small">${phone.description}</p>
                <p class="card-text h3"><span class="text-decoration-line-through text-danger h1">$${phone.old_price}</span>  $${phone.price}</p>
                <a href="#" class="btn btn-outline-dark rounder">Buy now</a>
                <a href="#" class="btn bg-black btn-dark rounder">Learn more</a>
            </div>
        </div>
    </div>`
});







