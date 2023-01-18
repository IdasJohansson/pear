import "../../shared/global/style.css"; 
import "./products.css";
import { useState, useEffect } from "react";
import pearAPIService from "../../shared/api/service/pearAPIService";


export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
              const response = await pearAPIService.getProducts(); 
              setProducts(response.data);
            } catch (error) {
              alert("Error retrieving desired data from server: " + error);
            }
          }
          fetchProduct(); 
    }, []); 

     // As a start the table is sorted by id in asc order. 
     const [sortBy, setSortBy] = useState("id");
     const [sortOrder, setSortOrder] = useState("asc");
 
     const handleSort = (column) => {
         setSortBy(column);
         setSortOrder(sortOrder === "asc" ? "desc" : "asc");
     };
 
     const sortedProducts = products.sort((a, b) => {
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
        <h2>Products </h2>
        <p> (Press column header to sort)</p>
        <table className="table">  
        <thead>
                <tr>  
                    <th onClick={() => handleSort("id")} className={sortBy === "id" ? "active" : ""}>Id</th>  
                    <th onClick={() => handleSort("name")} className={sortBy === "name" ? "active" : ""}>Name</th>  
                    <th onClick={() => handleSort("price")} className={sortBy === "price" ? "active" : ""}>Price</th>  
                </tr>  
        </thead>
            <tbody>
                {sortedProducts.map((products) => (  
                <tr key={products.id}>  
                    <td>{products.id}</td>  
                    <td>{products.name}</td>  
                    <td>{products.price}</td>  
                </tr>  
                ))}  
            </tbody>
        </table>  
    </div>
        </>
    )
}