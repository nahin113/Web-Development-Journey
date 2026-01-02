// document.addEventListener("DOMContentLoaded",()=> {
//     const products = [
//         { id: 1, name: "Google Pixel 6", price : 27500 },
//         { id: 2, name: "Samsung s21 Ultra", price : 22500 },
//         { id: 3, name: "Iphone 13", price : 60000 },
//         { id : 4, name: "Redmi note 11", price : 30000}
//     ]

//     const cart =[]

//     const productList = document.getElementById("product-list");
//     const cartItems = document.getElementById("cart-items")
//     const emptyCartMsge = document.getElementById("empty-cart");
//     const cartTotalMsge = document.getElementById("cart-total");
//     const totalPrice = document.getElementById("total-price");
//     const checkout = document.getElementById("checkout-btn");

//     products.forEach(product => {
//         const productDiv = document.createElement("div")
//         productDiv.classList.add("product")
//         productDiv.innerHTML = `
//         <span>${product.name} - ${product.price.toFixed(2)}</span>
//         <button data-id = "${product.id}">Add to Cart</button>
//         `
//         productList.appendChild(productDiv)
//     })

//     productList.addEventListener("click",(e)=> {
//         if(e.target.tagName === "BUTTON") {
//            const productId = parseInt(e.target.getAttribute("data-id"))
//            const product = products.find(p => p.id === productId)
//            addToCart(product)
//         }
//     })


//     function addToCart(product) {
//         cart.push(product)
//         renderCart()   
//     }
    
//     function renderCart() {
//         cartItems.innerText = ""
//         let Total = 0

//         if(cart.length) {
//             emptyCartMsge.classList.add("hidden")
//             cartTotalMsge.classList.remove("hidden")

//             cart.forEach((item,index) => {
//                 Total+=item.price
//                 const cartItem = document.createElement("div")

//                 cartItem.innerHTML = `
//                 ${item.name} - ${item.price}
//                 `
//                 cartItems.appendChild(cartItem)
                
//                 totalPrice.textContent = `${Total}`
//             })
//         }
//         else {
//             emptyCartMsge.classList.remove("hidden")
//             cartTotalMsge.classList.add("hidden");
//         }
//     }

//     checkout.addEventListener("click", ()=> {
//         cart.length = 0
//         alert("Checkout Successful , Payment procedure . . .")
//         renderCart()
//         cartItems.textContent = "Your cart is empty";
//     })

// })

document.addEventListener("DOMContentLoaded",()=> {
    const products = [
        {id: 1, name: "Pookie Printed Grown" , price : 900},
        {id: 2, name : "Earbuds X5 Lite", price :1500},
        {id: 3, name : "Drop Shoulder T-shirt", price: 700},
        {id: 4, name : "Chocolates", price: 1200},
        {id: 4, name : "Winter Hoodie", price: 700}
    ]

    let cart = JSON.parse(localStorage.getItem("Product")) || [];

    const productList = document.getElementById("product-list");
    const shoppingCart = document.getElementById("cart-items");
    const emptyCartDisplay = document.getElementById("empty-cart");
    const cartTotalDisplay = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkout = document.getElementById("checkout-btn");

    renderCart()

    products.forEach(item => {
        const product = document.createElement("div")
        product.classList.add("product")
        product.innerHTML = `
        <span>${item.name} - ${item.price}</span>
        <button data-id=${item.id}>Add to Cart</button>
        `
        productList.appendChild(product)
    })

    productList.addEventListener("click",(e)=> {
        if(e.target.tagName ==="BUTTON") {
            const pID = parseInt(e.target.getAttribute("data-id"))
            const p = products.find(item => item.id === pID)
            cart.push(p)
            saveCart()
            renderCart()
        }
    })

    shoppingCart.addEventListener("click",(e)=> {
        if(e.target.tagName === "BUTTON") {
            const rID = parseInt(e.target.getAttribute("data-id"))
            index = cart.findIndex(item => item.id === rID)
            if(index!=-1)
            {
                cart.splice(index,1)
            }
            saveCart()
            renderCart()
        }
    })

    function renderCart() {
        shoppingCart.innerText = ""
        let Total = 0

        if(cart.length > 0) {

            emptyCartDisplay.classList.add("hidden")
            cartTotalDisplay.classList.remove("hidden")

            cart.forEach(item => {
                Total+=item.price
                const cartProduct = document.createElement("div")
                cartProduct.classList.add("product")
                cartProduct.innerHTML = `
                <span>${item.name} - ${item.price}</span>
                <button data-id=${item.id}>Remove from Cart</button>
                `
                shoppingCart.appendChild(cartProduct)

                totalPriceDisplay.textContent = `${Total}`
            })
        }
        else {
            emptyCartDisplay.classList.remove("hidden");
            cartTotalDisplay.classList.add("hidden");
            // shoppingCart.textContent = "Your cart is empty";
        }
    }

    checkout.addEventListener("click",()=> {
        if(cart.length <= 2 ) alert("eto kom keno kinla, beshi kore kino")
        else if(cart.length == 3 ) alert("Khub upokar, tk to jacche na , aro keno");
        else if(cart.length >= 3 ) alert("etogulo kinla ?");
        cart.length = 0
        saveCart()
        renderCart()
        
        shoppingCart.textContent = "Take all my love baby 💖💗💓💞💘";
    })

    function saveCart(){
        localStorage.setItem("Product",JSON.stringify(cart))
    }

})

