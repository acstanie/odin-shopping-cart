function setItemLocalStorage(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

function getItemLocalStorage(key) {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : []
    } catch (error) {
        console.log(error);
    }
}

export { setItemLocalStorage, getItemLocalStorage }