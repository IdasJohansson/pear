import "./signInView.css" 
//import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { LogInForm } from "../../components/logInForm/logInForm";
import backgroundVideo from "../../shared/img/video.mp4"

export const SignInView = () => {

    return (
        <>
            <div className="container">
            <Header/>
                <LogInForm/>
            <video autoPlay loop muted id="video"> 
                <source src={backgroundVideo} type="video/mp4"/> 
            </video>
            <Footer/>
            </div>
        </>
    )
}