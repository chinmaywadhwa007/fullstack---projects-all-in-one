// this is the most important part completed to grab the whole  element in the "domcontentloaded" 
document.addEventListener('DOMContentLoaded', () => {
    // we can create an object for the product list...!
    const products = [
        { Id: 1, name: "milk ", price: 45.44 },
        { Id: 2, name: "laptop", price: 455.44 },
        { Id: 3, name: "car", price: 100.44 },
        { Id: 3, name: "oil", price: 100.44 },
        { Id: 3, name: "potatos", price: 100.44 },
        { Id: 3, name: "tomatos", price: 100.44 },
    ]
    // after that we can grab the ids
    const productList = document.getElementById('product-list')
    const items = document.getElementById('cart-items')
    const cart = []
    const Total_cart = document.getElementById('cart-total')
    const Total_prize = document.getElementById('total-price')
    const check_btn = document.getElementById('checkout')
    // after grabing the eleemnt we have to show the products that we have created by using object so this is the process...!
    // 1st we have to create the foreach loop 
    products.forEach(product => {
        //2nd we have to create the element called prodiv where we add our product
        const proDiv = document.createElement('div')
        proDiv.classList.add('products')
        //  after that we will connect out html with the innerHTML
        proDiv.innerHTML = `
            <span>${product.name}-$${product.price.toFixed(2)}</span>
            <BUTTON class="add_btn" data-Id ="${product.Id}">add to cart </BUTTON>`
        productList.appendChild(proDiv) //  then where we have to show it on display for this we have to use the appandchild 
    })
    // after that we have make the BUTTON work which we created in products to addcart items
    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute('data-Id'))
            const product = products.find(p => p.Id === productId)
            AddToCart(product)


        }
    })
    //here we will work for the function of check_btn and product
    function AddToCart(product) {
        cart.push(product)
        console.log(cart);
        updateCart()




    }

    function updateCart() {
        console.log("this is runnning fine just for checking ");
        items.innerText = " "
        let TotalPrice = 0
        if (cart.length > 0) {

            Total_prize.classList.remove('hidden')
            cart.forEach((item, index) => {
                TotalPrice += item.price
                const cartItem = document.createElement('div')
                cartItem.innerHTML = `
                    ${item.name}-$ ${item.price.toFixed(2)}

                `
                items.appendChild(cartItem)
                Total_prize.textContent = `${TotalPrice.toFixed(2)}`
            })
        } else {

            Total_prize.classList.add('hidden')
        }
    }

    //this is for the check out btn 
    check_btn.addEventListener('click', () => {
        cart.length = 0
        alert("your items checkout successfully !!!")
        updateCart()
    })




})
