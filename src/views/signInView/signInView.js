import "./signInView.css" 
import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { LogInForm } from "../../components/logInForm/logInForm";

export const SignInView = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <LogInForm/>
            </div>
            <Footer/>
        </>
    )
}