import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import Axios from "axios";
import "./stockForm.css"

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
    <p> (Presse column header to sort)</p>
    <table className="table">  
            <tr>  
                <th onClick={() => handleSort("warehouseId")} className={sortBy === "warehouseId" ? "active" : ""}>Warehouse</th>  
                <th onClick={() => handleSort("productId")} className={sortBy === "productId" ? "active" : ""}>Product</th>  
                <th onClick={() => handleSort("quantity")} className={sortBy === "quantity" ? "active" : ""}>Quantity</th>  
            </tr>  
    
            {sortedStockQuantity.map((stockQuantity, index) => (  
              <tr data-index={index}>  
                <td>{stockQuantity.warehouseId}</td>  
                <td>{stockQuantity.productId}</td>  
                <td>{stockQuantity.quantity}</td>  
              </tr>  
            ))}  
    
        </table>  
    
    </div>
    </>
  )
}

// export const StockForm = () => {
//     const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 

//     // To store all the products in a array
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState('');

//     const [warehouse, setWareHouse] = useState([]);
//     const [selectedWarehouse, setSelectedWarehouse] = useState(''); 

// // Add correct values here: 
// const productId = 'P002'
// const warehouseId = 3
// sumQuantity(productId, warehouseId)

// function sumQuantity(productId, warehouseId) {
//         Axios.get('https://localhost:7176/api/Delivery')
//           .then(response => {
//             const data = response.data;
//             return data.filter(item => item.productId === productId && item.warehouseId === warehouseId)
//               .reduce((acc, item) => acc + item.quantity, 0);
//           })
//           .then(sum => {
//             console.log(sum);
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       }


//     useEffect(() => {
//         const fetchProduct = async () => {
//           try {
//             const response = await Axios.get("https://localhost:7176/api/Product")
//             setProducts(response.data);
//           } catch (error) {
//             alert("Error retrieving desired data from server: " + error);
//           }
//         }

//         const fetchWarehouse = async () => {
//             try {
//               const response = await Axios.get("https://localhost:7176/api/Warehouse")
//               setWareHouse(response.data);
//             } catch (error) {
//               alert("Error retrieving desired data from server: " + error);
//             }
//           }
//         fetchProduct();
//         fetchWarehouse(); 
//       }, []);


//     return (
//         <>
//         <form className="deliveryForm">
//         <label>
//                 <h2>Product: </h2> 
//                 <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
//                 {products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}
//                 </select>
//             </label> <br/>
//             <label>
//                 <h2>Warehouse:</h2> 
//                 <select value={selectedWarehouse} onChange={e => setSelectedWarehouse(e.target.value)}>
//                 {warehouse.map(warehouse => <option key={warehouse.id} value={warehouse.id}>{warehouse.city}</option>)}
//                 </select>
//             </label> <br/>
//         <button onClick={sumQuantity}> sum </button>
//         </form>
//         </>
//     )
// }