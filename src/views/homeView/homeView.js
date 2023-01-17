import "./homeView.css" 
import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DeliveryForm } from "../../components/deliveryForm/deliveryForm";
import { StockQuantity } from "../../components/stockQuantity/stockQuantity";
import { NavBar } from "../../components/navbar/navbar";

export const HomeView = () => {
 
    return (
        <>
            <div className="container">
            <Header/>
            <NavBar/>
            <DeliveryForm/> 
            </div>
            <Footer/>
        </>
    )
}