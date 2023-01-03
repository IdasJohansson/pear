import "./homeView.css" 
import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import img from "../../shared/img/logo512.png"
import {useNavigate} from "react-router-dom"; 
import routingPath from "../../routes/routingPath";

export const HomeView = () => {
    const navigate = useNavigate(); 
    const logOut = () => {
        navigate(routingPath.signInView); 
    }
    return (
        <>
            <Header/>
            <button type="submit" onClick={()=> logOut()}> LOG OUT </button>
            <img src={img} className="background-img" alt="pear"/>
            <Footer/>
        </>
    )
}