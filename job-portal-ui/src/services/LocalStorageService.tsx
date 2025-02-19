const setItem=(key:string, value:any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key:string) => {
    return JSON.parse(localStorage.getItem(key) as string)
}

const removeItem = (key:string) => {
    localStorage.removeItem(key)
}

export {setItem, getItem, removeItem};