import "./signInView.css" 
import "../../shared/global/style.css"
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { LogInForm } from "../../components/logInForm/logInForm";
import { useEffect } from "react";

export const SignInView = () => {
    // In this view the logout button is hidden, placeed in a useEffect so it is valid everytime the pages in rendering. 
    useEffect(() => {
    document.getElementById("logOutButton").hidden = true; 
    }); 

    return (
        <>
            <div className="container">
            <Header/>
                <LogInForm/>
            <Footer/>
            </div>
        </>
    )
}