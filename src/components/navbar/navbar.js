import "./navbar.css"; 
import { useNavigate } from "react-router-dom";
import routingPath from "../../routes/routingPath";

export const NavBar = () => {
    const navigate = useNavigate();
    
    return(
        <>
        <div className="navBar">
        <button className="navButton" onClick={() => navigate(routingPath.homeView)}> STOCK BALANCE</button>
        <button className="navButton" onClick={() => navigate(routingPath.quantityView)}> REGISTER DELIVERY </button>
        <button className="navButton" onClick={() => navigate(routingPath.productsView)}> PRODUCTS</button>
        <button className="navButton" onClick={() => navigate(routingPath.warehouseView)}> WAREHOUSES </button>
        <button className="navButton" onClick={() => navigate(routingPath.loggerView)}> DELIVERY LOG </button>
        </div>
        </>
    )
}