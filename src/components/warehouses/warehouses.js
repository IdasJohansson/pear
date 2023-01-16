import "../../shared/global/style.css"; 
import "./warehouses.css";
import { useState, useEffect } from "react";
import Axios from "axios";

export const Warehouses = () => {
    const [warehouse, setWareHouse] = useState([]);

    useEffect(() => {
        const fetchWarehouse = async () => {
            try {
              const response = await Axios.get("https://localhost:7176/api/Warehouse")
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
                {sortedWarehouses.map((warehouse, index) => (  
                <tr data-index={index}>  
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