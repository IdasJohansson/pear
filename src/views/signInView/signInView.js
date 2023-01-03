import "./signInView.css" 
import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import img from "../../shared/img/logo512.png"
import { LogInForm } from "../../components/logInForm/logInForm";

export const SignInView = () => {
    return (
        <>
            <Header/>
            <LogInForm/>
            <img src={img} className="background-img" alt="pear"/>
            <Footer/>
        </>
    )
}