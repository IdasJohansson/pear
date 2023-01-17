import { Header } from "../../components/header/header"; 
import { Footer } from "../../components/footer/footer";
import { NavBar } from "../../components/navbar/navbar";
import { Warehouses } from "../../components/warehouses/warehouses";

export const WarehouseView = () => {
    
    return(
        <>
        <div className="container">
        <Header/>
        <NavBar/>
        <Warehouses/>
        </div>
       <Footer/> 
        </>
    )
}