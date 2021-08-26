export const check_Login = (req, res) => {};

export const profile_getProfile = (req, res) => {};

export const profile_addProfile = (req, res) => {};

export const profile_modifyProfile = (req, res) => {};

export const product_getAllProduct = (req, res) => {};

export const product_getProductByID = (req, res) => {};

export const product_addNewProduct = (req, res) => {};

export const product_modifyProductByID = (req, res) => {};

export const product_deleteProductByID = (req, res) => {};

/* 

profile_object : {
    name: "tom",
    email: "hank",
    phone: "123-456-6542",
    Address: "(address text)"
}

*/

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

*/
