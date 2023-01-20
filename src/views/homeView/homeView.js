import "./homeView.css" 
import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { NavBar } from "../../components/navbar/navbar";
import { LogOut } from "../../components/logOut/logOut";
import { StockQuantity } from "../../components/stockQuantity/stockQuantity";

export const HomeView = () => {
 
    return (
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