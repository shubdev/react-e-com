export const getStorageItem = (key) => {
    if (!key) {
        return
    }
    return JSON.parse(localStorage.getItem(key)) || [];
}

export const setStorageItem = (key, data) => {
    if (!key || !data) {
        return
    }
    localStorage.setItem(key, JSON.stringify(data));
}

export const calculateTotal = (cartItems) => {
    let sum = cartItems + cartItems;
}