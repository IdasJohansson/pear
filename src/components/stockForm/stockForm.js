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

  return (
    <>
    <div className="deliveryForm">
    <h2> Stock quantity </h2>
    <table className="table">  
            <tr>  
                <th>Warehouse</th>  
                <th>Product</th>  
                <th>Quantity</th>  
            </tr>  
    
            {stockQuantity.map((stockQuantity, index) => (  
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