import "./homeView.css" 
import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DeliveryForm } from "../../components/deliveryForm/deliveryForm";

export const HomeView = () => {
 
    return (
        <>
            <div className="container">
            <Header/>
            <DeliveryForm/> 
            <Footer/>
            </div>
        </>
    )
}