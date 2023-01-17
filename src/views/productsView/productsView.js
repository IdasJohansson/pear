import { Header } from "../../components/header/header"; 
import { Products } from "../../components/products/products";
import { Footer } from "../../components/footer/footer";
import { NavBar } from "../../components/navbar/navbar";

export const ProductsView = () => {
    
    return(
        <>
        <div className="container">
        <Header></Header>
        <NavBar></NavBar>
       <Products></Products>
        </div>
       <Footer> </Footer>
        </>
    )
}