import "../../shared/global/style.css"
import "./logInForm.css"
import {useNavigate} from "react-router-dom"; 
import routingPath from "../../routes/routingPath";
import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage"; 



export const LogInForm = () => {
    const navigate = useNavigate(); 
    
    // This is a global state
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 


    const logIn = () => {
        // Give a value to authentictedUser
        setAuthenticatedUser("Add username here"); 

        // Saves logged in user in localstorage
        localStorage.setItem(LocalStorage.username, "Add username here"); 
        navigate(routingPath.homeView); 
    };

    return (
        <>
           <form className="logInForm">
                <label>
                    <h2>USERNAME</h2>
                    <input placeholder="Enter username" type="text" name="username"></input>
                </label><br/>
                <label>
                <h2>PASSWORD</h2>
                    <input placeholder="Enter password" type="password" name="password"></input>
                </label><br/>
                <button type="submit" onClick={()=> logIn()}> LOG IN </button>
            </form>
        </>
    )
}; 