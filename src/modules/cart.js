const cart = () => {
    
const cartBtn = document.getElementById('cart')
const cartModal = document.querySelector('.cart')
const cartCloseBtn = cartModal.querySelector('.cart-close')

const openCart = () => {
    cartModal.getElementsByClassName.display = 'flex'
}

const closeCart = () => {
    cartModal.style.display = ''
}

// cartBtn.onclick = function() {
//     openCart()
// }

// cartCloseBtn.onclick = closeCart

cartBtn.addEventListener('click', openCart)
cartCloseBtn.addEventListener('click', closeCart)
}

export default cart