import "../../shared/global/style.css"; 
import "./warehouses.css";
import { useState, useEffect } from "react";
import pearAPIService from "../../shared/api/service/pearAPIService";


export const Warehouses = () => {
    const [warehouse, setWareHouse] = useState([]);

    useEffect(() => {
        const fetchWarehouse = async () => {
            try {
              const response = await pearAPIService.getWarehouses(); 
              setWareHouse(response.data);
            } catch (error) {
              alert("Error retrieving desired data from server: " + error);
            }
          }
          fetchWarehouse(); 
    }, []); 

     // As a start the table is sorted by id in asc order. 
     const [sortBy, setSortBy] = useState("id");
     const [sortOrder, setSortOrder] = useState("asc");
 
     const handleSort = (column) => {
         setSortBy(column);
         setSortOrder(sortOrder === "asc" ? "desc" : "asc");
     };
 
     const sortedWarehouses = warehouse.sort((a, b) => {
         if (sortOrder === "asc") {
             if (a[sortBy] < b[sortBy]) {
                 return -1;
             }
             if (a[sortBy] > b[sortBy]) {
                 return 1;
             }
         } else {
             if (a[sortBy] > b[sortBy]) {
                 return -1;
             }
             if (a[sortBy] < b[sortBy]) {
                 return 1;
             }
         }
         return 0;
     });

    return (
        <>
         <div className="deliveryForm">
        <h2> Warehouses </h2>
        <p> (Press column header to sort)</p>
        <table className="table">  
        <thead>
                <tr>  
                    <th onClick={() => handleSort("id")} className={sortBy === "id" ? "active" : ""}>Id</th>  
                    <th onClick={() => handleSort("city")} className={sortBy === "city" ? "active" : ""}>City</th>  
                </tr>  
        </thead>
        <tbody>
                {sortedWarehouses.map((warehouse) => (  
                    <tr key={warehouse.id}>  
                        <td>{warehouse.id}</td>  
                        <td>{warehouse.city}</td>  
                    </tr>  
                ))}  
            </tbody>
        </table>  
    </div>
        </>
    )
}

//key={warehouse.id} https://reactjs.org/docs/lists-and-keys.html
// The key is used to keep track of the rendering elements