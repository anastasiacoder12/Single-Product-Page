// BUTTON FOR QUANTITY
const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const qtyInput = document.getElementById('qty-input');

const unitPrice = 120.00 ;
const totalAmountDisplay = document.getElementById ('total-amount');

plusBtn.addEventListener('click', () => {
    let currentValue = parseInt(qtyInput.value);
    qtyInput.value = currentValue + 1;
    updateTotal();
});

minusBtn.addEventListener('click', () => {
    let currentValue = parseInt(qtyInput.value);
    if (currentValue > 1) {
        qtyInput.value = currentValue - 1;
        updateTotal();
    }
});

function updateTotal (){
    let qty = parseInt(qtyInput.value);
    let total = qty * unitPrice;
    totalAmountDisplay.innerText = total.toFixed(2);
}

//BUTTON FOR ADD TO CART 
const AddToCartBtn = document.querySelector('.add-to-cart-btn');
const cartCount = document.getElementById('cart-count');
let totalItemsInCart = 0;

AddToCartBtn.addEventListener('click', () => {
    const addedQty =  parseInt(qtyInput.value);
    totalItemsInCart += addedQty ;
    cartCount.innerText = `(${totalItemsInCart})`;

    alert(`${addedQty} Added to cart!`);
})

// IMAGE GALLERY
const mainImg = document.getElementById('featured-img');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        let newSrc = this.src;
        mainImg.src = newSrc;

        removeActiveThumb();
        this.classList.add('active');
    });
});

function removeActiveThumb() {
    thumbnails.forEach(t => t.classList.remove('active'));
}

// COLOR OPTIONS

const colors = document.querySelectorAll('.color-dot');

colors.forEach(color => {
    color.addEventListener('click', function() {
       
        removeActiveColor();
        this.classList.add('active');
    });
});

function removeActiveColor() {
    colors.forEach(c => c.classList.remove('active'));
}


// ZOOM IMAGE
const container = document.querySelector('.main-image');
const img = document.getElementById('featured-img');

container.addEventListener('mousemove', (e) => {
   
    const { left, top, width, height } = container.getBoundingClientRect();

    
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(1.5)"; 
});


container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});




