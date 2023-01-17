import { LogOut } from "../logOut/logOut";
import "./navbar.css"; 
import { useNavigate } from "react-router-dom";
import routingPath from "../../routes/routingPath";

export const NavBar = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="navBar">
        <LogOut/> 
        <button className="navButton" onClick={() => navigate(routingPath.homeView)}> START</button>
        <button className="navButton" onClick={() => navigate(routingPath.quantityView)}> QUANTITY </button>
        <button className="navButton" onClick={() => navigate(routingPath.productsView)}> PRODUCTS</button>
        <button className="navButton" onClick={() => navigate(routingPath.warehouseView)}> WAREHOUSES </button>
        <button className="navButton"> LOG </button>
        </div>
        </>
    )
}