import { LogOut } from "../logOut/logOut";
import "./navbar.css"; 

export const NavBar = () => {
    return(
        <>
        <div className="navBar">
        <LogOut/> 
        <button className="navButton"> START</button>
        <button className="navButton"> QUANTITY </button>
        <button className="navButton"> PRODUCTS</button>
        <button className="navButton"> WAREHOUSES </button>
        <button className="navButton"> LOG </button>
        </div>
        </>
    )
}