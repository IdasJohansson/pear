import "../../shared/global/style.css"
import "./logInForm.css"
import {useNavigate} from "react-router-dom"; 
import routingPath from "../../routes/routingPath";
import { useContext, useState } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage"; 
import { Axios } from "axios";



export const LogInForm = () => {
    const navigate = useNavigate(); 
    
    // AuthenticatedUser is a global state
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 
    const [username, setUsername] = useState(); 
    const [password, setPassword] = useState(); 

    const logIn = () => {
        // Give a value to authentictedUser
        setAuthenticatedUser(username); 

        // Saves logged in user in localstorage
        localStorage.setItem(LocalStorage.username, username); 
    };

    return (
        <>
           <form className="logInForm">
               {username}
                <label>
                    <h2>USERNAME</h2>
                    <input placeholder="Enter username" type="text" name="username" onChange={(event) => setUsername(event.target.value)}></input>
                </label><br/>
                <label>
                <h2>PASSWORD</h2>
                    <input placeholder="Enter password" type="password" name="password" onChange={(event) => setPassword(event.target.value)}></input>
                </label><br/>
                <button type="submit" onClick={()=> logIn()}> LOG IN </button>
            </form>
        </>
    )
}; 