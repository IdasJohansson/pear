import { Header } from "../../components/header/header"; 
import { Products } from "../../components/products/products";
import { Footer } from "../../components/footer/footer";
import { NavBar } from "../../components/navbar/navbar";
import { LogOut } from "../../components/logOut/logOut";

export const ProductsView = () => {
    
    return(
        <>
        <div className="container">
        <Header/>
        <NavBar/>
        <LogOut/>
       <Products/>
        </div>
       <Footer/> 
        </>
    )
}