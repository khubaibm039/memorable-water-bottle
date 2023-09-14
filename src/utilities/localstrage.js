const getStorageCart = () => {
    const storeCartStr = localStorage.getItem('cart')
    if (storeCartStr) {
        return JSON.parse(storeCartStr)
    }
    return []
}
const saveCartToLS = cart => {
    const stringified = JSON.stringify(cart)
    localStorage.setItem('cart', stringified)
}

const addToLS = id => {
    const cart = getStorageCart()
    cart.push(id)

    // save to local storage
    saveCartToLS(cart)
}

export { addToLS, getStorageCart }
