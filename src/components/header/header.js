import "../../shared/global/style.css"
import "./header.css"
import {useNavigate} from "react-router-dom"; 
import routingPath from "../../routes/routingPath";
import LocalStorage from "../../shared/storage/LocalStorage";
import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";

export const Header = () => {
    const navigate = useNavigate(); 
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 

    const logOut = () => {
        localStorage.removeItem(LocalStorage.username)
        setAuthenticatedUser(null); 
        navigate(routingPath.signInView); 
    }

    return (
        <>
        <div className="header-container">
       <div id="logOutButton">
        <button type="submit" onClick={()=> logOut()}> LOG OUT </button>
       </div>
        </div>
        </>
    )
}