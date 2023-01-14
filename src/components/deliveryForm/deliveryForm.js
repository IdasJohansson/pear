import "../../shared/global/style.css"; 
import "./deliveryForm.css"; 
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import Axios from "axios";

export const DeliveryForm = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 
    const [serverResponse, setServerResponse] = useState("");

    const [productId, setProductId] = useState("P001"); 
    const [quantity, setQuantity] = useState("100"); 
    const [warehouseId,setWarehouseId] = useState("1"); 
    const [userId, setUserId] = useState("0460476b-60c9-48e3-9026-561302e7fa59"); 

    console.log(productId); 
    console.log(quantity); 
    console.log(warehouseId); 
    console.log(userId); 
    
    const saveInput = () => {
        console.log("Save button");
        fetch("https://localhost:7176/api/Delivery", {
            method: "POST",
            headers: {
                "Content-Type": "applicatin/json"
            },
            body: JSON.stringify({
                productId,
                quantity,
                warehouseId,
                userId
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setServerResponse(data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetch("https://localhost:7176/api/Delivery", {
            method: "POST",
            
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productId,
                quantity,
                warehouseId,
                userId
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setServerResponse(data);
        })
        .catch(error => {
            console.log(error);
        });

    }, [])


    return (
        <>
         <p id="user"> User: {authenticatedUser}</p> 
           {/* <form className="deliveryForm">
                <label>
        
                <div className="dropdown">
                        <label dropdown="true"> Warehouse: </label> <br/>
                        <select name="dropdown" value={warehouseId} onChange={(e) => setWarehouseId(e.target.value) }>
                        <option value="-"> - </option>
                        <option value="1"> Cupertino </option>
                        <option value="2">Norrköping</option>
                        <option value="3"> Frankfurt</option>
                        </select>
                    </div>

                     <div className="dropdown">
                        <label dropdown="true"> Product: </label> <br/>
                        <select name="dropdown" value={productId} onChange={(e) => setProductId(e.target.value)}>
                        <option value="-"> - </option>
                        <option value="P001">jTelefon</option>
                        <option value="P002">jPlatta</option>
                        <option value="P003">Päronklocka</option>
                        </select>
                    </div>
                    <input placeholder="Insert quantity" type="text" name="qty" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                </label><br/>  */}
            {/* </form> */}
        
                <button type="submit" value="test" onClick={() => saveInput()}> SAVE </button>
                

         
        </>
    )
}; 
