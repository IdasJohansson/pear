import { LogOut } from "../logOut/logOut";
import "./navbar.css"; 
import { useNavigate } from "react-router-dom";
import routingPath from "../../routes/routingPath";
import { useState,useEffect } from "react";

export const NavBar = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState("homeView");

    // Använd evetuellt för att visa ändra färg på den aktiva knappen. 
    useEffect(() => {
        const path = window.location.pathname;
        const page = Object.keys(routingPath).find(key => routingPath[key] === path);
        setCurrentPage(page);
    }, []);
    
    return(
        <>
        <div className="navBar">
        <LogOut/> 
        <button className="navButton" onClick={() => navigate(routingPath.homeView)}> START</button>
        <button className="navButton" onClick={() => navigate(routingPath.quantityView)}> QUANTITY </button>
        <button className="navButton" onClick={() => navigate(routingPath.productsView)}> PRODUCTS</button>
        <button className="navButton" onClick={() => navigate(routingPath.warehouseView)}> WAREHOUSES </button>
        <button className="navButton" onClick={() => navigate(routingPath.loggerView)}> DELIVERY LOG </button>
        </div>
        </>
    )
}