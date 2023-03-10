import "../../shared/global/style.css"; 
import "./deliveryForm.css"; 
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import pearAPIService from "../../shared/api/service/pearAPIService";
import PearAPI from "../../shared/api/pearAPI";


export const DeliveryForm = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 

    // To store all the products in a array
    const [products, setProducts] = useState([]);
    // To store the value being chosen in the dropdownmeny
    const [selectedProduct, setSelectedProduct] = useState('P001');
    const [warehouse, setWareHouse] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState('1'); 
    const [quantity, setQuantity] = useState(''); 

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await pearAPIService.getProducts(); 
            setProducts(response.data);
          } catch (error) {
            alert("Error retrieving desired data from server: " + error);
          }
        }

        const fetchWarehouse = async () => {
            try {
              const response = await pearAPIService.getWarehouses(); 
              setWareHouse(response.data);
            } catch (error) {
              alert("Error retrieving desired data from server: " + error);
            }
          }
        fetchProduct();
        fetchWarehouse(); 
      }, []);

      const handleSubmit = (event) => {
        console.log("POST"); 
        console.log(selectedProduct);
        console.log(quantity);
        console.log(selectedWarehouse);
        event.preventDefault();
        // Send a POST request
        PearAPI.post("/Delivery", {
          date: new Date(),
          productId: selectedProduct,
          quantity: quantity,
          warehouseId: selectedWarehouse,
          userName: authenticatedUser
      })
      .then((response) => {
          console.log(response);
          alert("Delivery saved!")
      })
      .catch((error) => {
          console.log(error);
          alert(error); 
      });
  };
    
    return (
        <>
           <form className="deliveryForm" onSubmit={handleSubmit}>
             <p> Press input field to view options.</p>
             <p> You must select both product and warehouse and insert quantity to register incoming/outgoing stock.</p>
             <p> For incoming stock enter quantity, for outgoing stock add a "-" before the quantity. </p>
             <p> Ex: -1000</p>
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
