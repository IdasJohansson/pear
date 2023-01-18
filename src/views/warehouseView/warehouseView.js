import { Header } from "../../components/header/header"; 
import { Footer } from "../../components/footer/footer";
import { NavBar } from "../../components/navbar/navbar";
import { Warehouses } from "../../components/warehouses/warehouses";
import { LogOut } from "../../components/logOut/logOut";

export const WarehouseView = () => {
    
    return(
        <>
        <div className="container">
        <Header/>
        <NavBar/>
        <LogOut/>
        <Warehouses/>
        </div>
       <Footer/> 
        </>
    )
}