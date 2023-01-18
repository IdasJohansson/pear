import "./homeView.css" 
import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { DeliveryForm } from "../../components/deliveryForm/deliveryForm";
import { NavBar } from "../../components/navbar/navbar";
import { LogOut } from "../../components/logOut/logOut";

export const HomeView = () => {
 
    return (
        <>
            <div className="container">
            <Header/>
            <NavBar/>
            <LogOut/>
            <DeliveryForm/> 
            </div>
            <Footer/>
        </>
    )
}