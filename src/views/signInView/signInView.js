import "./signInView.css" 
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { LogInForm } from "../../components/logInForm/logInForm";
import backgroundVideo from "../../shared/img/video.mp4"; 

export const SignInView = () => {
    return (
        <>
            <div className="signIn-container">
            <Header/>
            <video autoPlay loop muted id="video"> 
                <source src={backgroundVideo} type="video/mp4"/> 
            </video>
                <LogInForm/>
            <Footer/>
            </div>
        </>
    )
}