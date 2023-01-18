import { Header } from "../../components/header/header"; 
import { Footer } from "../../components/footer/footer";
import { NavBar } from "../../components/navbar/navbar";
import { Logger } from "../../components/logger/logger";
import { LogOut } from "../../components/logOut/logOut";

export const LoggerView = () => {
    
    return(
        <>
        <div className="container">
        <Header/>
        <NavBar/>
        <LogOut/>
        <Logger/> 
        </div>
       <Footer/> 
        </>
    )
}