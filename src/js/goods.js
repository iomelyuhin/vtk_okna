// ====================================================================
// ============================GOODS===================================
// ====================================================================


//image picker

const mainImage = document.querySelector(".js__goodsMain");
const miniImages = document.querySelectorAll(".js__goodsItem");

miniImages.forEach(item => {
	item.addEventListener("click", e => {
		e.preventDefault();
		miniImages.forEach(img => img.classList.remove('active'));
		item.classList.add('active')
		let image = item.querySelector('img')
		let imageSrc = image.getAttribute("src")
		mainImage.src = imageSrc
	})
})

//calc total price
const itemPrice = document.querySelector(".js__priceItem").innerHTML
let qtyOfItems = document.querySelector(".js__totalQty")
let totalPrice = document.querySelector(".js__totalPrice")


const plusQty = document.querySelector(".js__totalPlusBtn")
const minusQty = document.querySelector(".js__totalMinusBtn")

function renewPrice() {
	let result = itemPrice * qtyOfItems.value
	totalPrice.innerHTML = Math.round(result * 10) / 10
	
}

qtyOfItems.addEventListener("input", () => {
	if (qtyOfItems.value <= 0 && qtyOfItems.value != "") {
		qtyOfItems.value = 1
	}
	
	renewPrice()
})

plusQty.addEventListener("click", e => {
	e.preventDefault();
	qtyOfItems.value++
	renewPrice()
})
minusQty.addEventListener("click", e => {
	e.preventDefault();
	qtyOfItems.value--
	if (qtyOfItems.value <= 0) {
		qtyOfItems.value = 1
	} 
	renewPrice()
})



renewPrice()