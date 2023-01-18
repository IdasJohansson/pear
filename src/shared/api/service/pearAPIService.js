import http from "../pearAPI"; 

// Imports the base url from "pearAPI.js"
const getProducts = () => {
    return http.get(`Product`); 
}; 

const getWarehouses = () => {
    return http.get(`Warehouse`); 
}; 

const getDelivery = () => {
    return http.get(`Delivery`); 
}; 


export default {getProducts, getWarehouses, getDelivery}; 