import { Header } from "../../components/header/header"; 
import { Footer } from "../../components/footer/footer";
import { NavBar } from "../../components/navbar/navbar";
import { StockQuantity } from "../../components/stockQuantity/stockQuantity";

export const QuantityView = () => {
    
    return(
        <>
        <div className="container">
        <Header/>
        <NavBar/>
        <StockQuantity/>
        </div>
       <Footer/> 
        </>
    )
}