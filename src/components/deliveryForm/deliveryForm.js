import "../../shared/global/style.css"; 
import "./deliveryForm.css"; 
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import Axios from "axios";

export const DeliveryForm = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 
    const [serverResponse, setServerResponse] = useState("");

    const [city, setCity] = useState(); 
    const [product, setProduct] = useState(); 
    const [quantity, setQuantity] = useState(); 
    console.log(city); 
    console.log(product); 
    console.log(quantity);
   
    
    // useEffect(() => {
    //     console.log("useEffect - fetchData");
    //     fetchData(); 
    // }, []);
    
    const fetchData = async () => {
        const response = await Axios.get("https://localhost:7176/api/Warehouse"); 
        setServerResponse(response);   
        console.log(serverResponse) ; 
    }; 
    
    const saveInput = () => {
        console.log("Saved button");
    }

    return (
        <>
         <p id="user"> User: {authenticatedUser}</p> 
           <form className="deliveryForm">
                <label>
        
                <div className="dropdown">
                        <label dropdown="true"> Warehouse: </label> <br/>
                        <select name="dropdown" value={city} onChange={(e) => setCity(e.target.value) }>
                        <option value="-"> - </option>
                        <option value="Cupertino"> Cupertino </option>
                        <option value="Norrköping">Norrköping</option>
                        <option value="Frankfurt"> Frankfurt</option>
                        </select>
                    </div>

                     <div className="dropdown">
                        <label dropdown="true"> Product: </label> <br/>
                        <select name="dropdown" value={product} onChange={(e) => setProduct(e.target.value)}>
                        <option value="-"> - </option>
                        <option value="jTelefon">jTelefon</option>
                        <option value="jPlatta">jPlatta</option>
                        <option value="Päronklocka">Päronklocka</option>
                        </select>
                    </div>
                    <input placeholder="Insert quantity" type="text" name="qty" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                </label><br/> 
        
                <button type="submit" value="test" onClick={saveInput()}> SAVE </button>
                
            </form>

         
        </>
    )
}; 
