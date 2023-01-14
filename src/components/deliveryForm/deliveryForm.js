import "../../shared/global/style.css"; 
import "./deliveryForm.css"; 
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import Axios from "axios";

export const DeliveryForm = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 

    // To store all the products in a array
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');

    const [warehouse, setWareHouse] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState(''); 

    const [quantity, setQuantity] = useState(''); 

    // const [productId, setProductId] = useState("P001"); 
    // const [quantity, setQuantity] = useState("100"); 
    // const [warehouseId,setWarehouseId] = useState("1"); 
    // const [userId, setUserId] = useState("0460476b-60c9-48e3-9026-561302e7fa59"); 

    // console.log(productId); 
    // console.log(quantity); 
    // console.log(warehouseId); 
    // console.log(userId); 

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

      const saveValues = () => {
          // Add post method here.... 
 
    }
    
    return (
        <>
         <p id="user"> User: {authenticatedUser}</p> 
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
            </label>
            <label> <br/>
                <h2> Quantity:</h2> 
                <input placeholder="pcs" type="text" name="qty" onChange={e => setQuantity(e.target.value)}></input>
            </label> <br/>
            <button className="saveBtn" type="submit" onClick={saveValues}>SAVE</button>
            </form>
        </>
    )
}; 
