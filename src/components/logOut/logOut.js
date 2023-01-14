import "../../shared/global/style.css"
import "./logOut.css"
import {useNavigate} from "react-router-dom"; 
import routingPath from "../../routes/routingPath";
import LocalStorage from "../../shared/storage/LocalStorage";
import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";



export const LogOut = () => {

    const navigate = useNavigate(); 
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 

    const logOut = () => {
        localStorage.removeItem(LocalStorage.username)
        setAuthenticatedUser(null); 
        navigate(routingPath.signInView); 
    }

    return(
        <>
        <p id="user"> User: {authenticatedUser}</p> 
        <div id="logOutButton">
            <button className="logOutbutton" type="submit" onClick={()=> logOut()}> LOG OUT </button>
        </div>
        </>
    )
}