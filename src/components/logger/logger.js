import "../../shared/global/style.css"; 
import "./logger.css";
import { useState, useEffect } from "react";
import pearAPIService from "../../shared/api/service/pearAPIService";
import dateFormat from "dateformat";

export const Logger = () => {
    const [deliveryLog, setDeliveryLog] = useState([]);

    useEffect(() => {
        const fetchDelivery = async () => {
            try {
              const response = await pearAPIService.getDelivery(); 
              setDeliveryLog(response.data);
            } catch (error) {
              alert("Error retrieving desired data from server: " + error);
            }
          }
          fetchDelivery(); 
    }, []); 

    // These sorting methods only sort from ascending compared to the other tables were you can sort both asc and desc
    // The localCompare method is used for sorting strings
    // [...deliveryLog] creates a new array with the elements of the deliveryLog array, so that it can be sorted and set to state without modifying the original array.
    const sortByDate = () => {
        setDeliveryLog([...deliveryLog].sort((b, a) => a.date.localeCompare(b.date)));
    }

    const sortByProductId = () => {
        setDeliveryLog([...deliveryLog].sort((a, b) => a.productId.localeCompare(b.productId)));
    }

    // Quantity and warehouseId is onling using the sort method for sorting (not local compare)
    const sortByQuantity = () => {
        setDeliveryLog([...deliveryLog].sort((a, b) => a.quantity - b.quantity));
    }
    
    const sortByWarehouseId = () => {
        setDeliveryLog([...deliveryLog].sort((a, b) => a.warehouseId - b.warehouseId));
    }

    const sortByUserName = () => {
        setDeliveryLog([...deliveryLog].sort((a, b) => a.userName.localeCompare(b.userName)));
    }

    return (
        <>
         <div className="deliveryForm">
        <h2>DeliveryLog </h2>
        <p> (Press column header to sort)</p>
        <table className="table">  
        <thead>
                <tr>  
                    <th onClick={() => sortByDate()}>Date</th>
                    <th onClick={() => sortByProductId()}> ProductId</th>
                    <th onClick={() => sortByQuantity()}> Quantity </th>
                    <th onClick={() => sortByWarehouseId()}> WarehouseId </th>
                    <th onClick={() => sortByUserName()}>  Username </th>
                </tr>  
        </thead>
            <tbody>
            {deliveryLog.map((log, index) => (
                <tr key={index}>  
                    <td>{dateFormat(log.date)}</td>  
                    <td>{log.productId}</td>  
                    <td>{log.quantity}</td>  
                    <td>{log.warehouseId}</td>  
                    <td>{log.userName}</td>  
                </tr>  
                ))}
            </tbody>
        </table>  
    </div>
        </>
    )
}