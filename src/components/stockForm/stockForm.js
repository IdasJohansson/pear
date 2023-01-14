import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import Axios from "axios";

export const StockForm = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 

    // To store all the products in a array
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');

    const [warehouse, setWareHouse] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState(''); 

// Add correct values here: 
const productId = 'P002'
const warehouseId = 3
sumQuantity(productId, warehouseId)

function sumQuantity(productId, warehouseId) {
        Axios.get('https://localhost:7176/api/Delivery')
          .then(response => {
            const data = response.data;
            return data.filter(item => item.productId === productId && item.warehouseId === warehouseId)
              .reduce((acc, item) => acc + item.quantity, 0);
          })
          .then(sum => {
            console.log(sum);
          })
          .catch(error => {
            console.log(error);
          });
      }


    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await Axios.get("https://localhost:7176/api/Product")
            setProducts(response.data);
          } catch (error) {
            alert("Error retrieving desired data from server: " + error);
          }
        }

        const fetchWarehouse = async () => {
            try {
              const response = await Axios.get("https://localhost:7176/api/Warehouse")
              setWareHouse(response.data);
            } catch (error) {
              alert("Error retrieving desired data from server: " + error);
            }
          }
        fetchProduct();
        fetchWarehouse(); 
      }, []);


    return (
        <>
        <form className="deliveryForm">
        <label>
                <h2>Product: </h2> 
                <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
                {products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}
                </select>
            </label> <br/>
            <label>
                <h2>Warehouse:</h2> 
                <select value={selectedWarehouse} onChange={e => setSelectedWarehouse(e.target.value)}>
                {warehouse.map(warehouse => <option key={warehouse.id} value={warehouse.id}>{warehouse.city}</option>)}
                </select>
            </label> <br/>
        <button onClick={sumQuantity}> sum </button>
        </form>
        </>
    )
}