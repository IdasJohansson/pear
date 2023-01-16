import { useState, useEffect } from "react";
import Axios from "axios";
import "./stockQuantity.css"; 
import "../../shared/global/style.css"; 

export const StockQuantity = () => {
  const [stockQuantity, setStockQuantity] = useState([]);

  useEffect(() => {
   const fecthWarehouseProductQuantity = async () => {
      try{
        const response = await Axios.get("https://localhost:7176/api/Delivery/warehouse-product-quantity")
        setStockQuantity(response.data); 
        console.log(response.data)
      } catch(error) {
        alert("Error retrieving desired data from server: " + error);
      }
    }
    fecthWarehouseProductQuantity(); 
  },[]); 

    // As a start the table is sorted by warehouseId in asc order. 
    const [sortBy, setSortBy] = useState("warehouseId");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSort = (column) => {
        setSortBy(column);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const sortedStockQuantity = stockQuantity.sort((a, b) => {
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
    <h2> Stock quantity </h2>
    <p> (Press column header to sort)</p>
    <table className="table">  
      <thead>
            <tr>  
                <th onClick={() => handleSort("productName")} className={sortBy === "productName" ? "active" : ""}>Product</th>  
                <th onClick={() => handleSort("warehouseName")} className={sortBy === "warehouseName" ? "active" : ""}>Warehouse</th>  
                <th onClick={() => handleSort("quantity")} className={sortBy === "quantity" ? "active" : ""}>Quantity</th>  
            </tr>  
      </thead>
        <tbody>
            {sortedStockQuantity.map((stockQuantity, index) => (  
              <tr data-index={index}>  
                <td>{stockQuantity.warehouseName}</td>  
                <td>{stockQuantity.productName}</td>  
                <td>{stockQuantity.quantity}</td>  
              </tr>  
            ))}  
        </tbody>
      </table>  
    </div>
    </>
  )
}

// This function is using the JavaScript sort() method on the stockQuantity array to sort the elements in the array based on the values of a specific property. The sort() method takes a compare function as an argument, which is passed two elements of the array to compare. The function should return a negative, zero, or positive value, depending on the arguments, like:

// a negative value if a should be sorted before b
// a positive value if b should be sorted before a
// 0 if a and b are equal and their order doesn't matter
// The function compares the values of the sortBy property of each element in the array. The sortBy variable is set to the column name that the user wants to sort by.

// The if (sortOrder === "asc") part of the function checks the current sort order, which is either "asc" or "desc" and determines whether to sort the array in ascending or descending order.

// If the sortOrder is "asc" and the value of a[sortBy] is less than the value of b[sortBy], the function returns -1, which means that a should be sorted before b.

// If the sortOrder is "asc" and the value of a[sortBy] is greater than the value of b[sortBy], the function returns 1, which means that b should be sorted before a.

// If the sortOrder is "desc" and the value of a[sortBy] is greater than the value of b[sortBy], the function returns -1, which means that a should be sorted before b.

// If the sortOrder is "desc" and the value of a[sortBy] is less than the value of b[sortBy], the function returns 1, which means that b should be sorted before a.

// And if none of the conditions are met, it means that a and b are equal and their order doesn't matter so it returns 0.

// Once the sort() method is called, it sorts the elements in the array in place and returns the same array, which is then stored in the sortedStockQuantity variable, which is then used to render the table in the return statement.