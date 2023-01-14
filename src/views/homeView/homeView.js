import "./homeView.css" 
import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DeliveryForm } from "../../components/deliveryForm/deliveryForm";
import { StockForm } from "../../components/stockForm/stockForm";

export const HomeView = () => {
 
    return (
        <>
            <div className="container">
            <Header/>
            <DeliveryForm/> 
            <StockForm> </StockForm>
            <Footer/>
            </div>
        </>
    )
}