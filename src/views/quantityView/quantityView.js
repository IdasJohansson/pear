import { Header } from "../../components/header/header"; 
import { Footer } from "../../components/footer/footer";
import { NavBar } from "../../components/navbar/navbar";
import { StockQuantity } from "../../components/stockQuantity/stockQuantity";
import { LogOut } from "../../components/logOut/logOut";

export const QuantityView = () => {
    
    return(
        <>
        <div className="container">
        <Header/>
        <NavBar/>
        <LogOut/>
        <StockQuantity/>
        </div>
       <Footer/> 
        </>
    )
}