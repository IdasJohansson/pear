import { Header } from "../../components/header/header"; 
import { Footer } from "../../components/footer/footer";
import { NavBar } from "../../components/navbar/navbar";
import { LogOut } from "../../components/logOut/logOut";
import { DeliveryForm } from "../../components/deliveryForm/deliveryForm";


export const QuantityView = () => {
    
    return(
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