import "../../shared/global/style.css"; 
import "./deliveryForm.css"; 
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import Axios from "axios";
import { LogOut } from "../logOut/logOut";

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

      const handleSubmit = (event) => {
        console.log("POST")
        event.preventDefault();
        // send a POST request
        Axios({
          method: 'post',
          url: 'https://localhost:7176/api/Delivery',
          data: {
            date:new Date(),
            productId: "P001",
            quantity: 10,
            warehouseId: 1,
            userId: "0460476b-60c9-48e3-9026-561302e7fa59"
          } 
          }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
 
    }
    
    return (
        <>
        <LogOut> </LogOut>
           <form className="deliveryForm" onSubmit={handleSubmit}>
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
            <button className="saveBtn" type="submit">SAVE</button>
            </form>
        </>
    )
}; 
