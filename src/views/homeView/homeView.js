import "./homeView.css" 
import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DeliveryForm } from "../../components/deliveryForm/deliveryForm";
import { StockQuantity } from "../../components/stockQuantity/stockQuantity";
import { Warehouses } from "../../components/warehouses/warehouses";
import { Products } from "../../components/products/products";

export const HomeView = () => {
 
    return (
        <>
            <div className="home-container">
            <Header/>
            <DeliveryForm/> 
            <StockQuantity/> 
            <Products> </Products>
            <Warehouses></Warehouses>
            <Footer/>
            </div>
        </>
    )
}