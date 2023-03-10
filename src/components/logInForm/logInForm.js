import "../../shared/global/style.css"
import "./logInForm.css"
import { useContext, useState } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage"; 
import PearAPI from "../../shared/api/pearAPI";

export const LogInForm = () => {
    // AuthenticatedUser is a global state
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); 
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    function handleSubmit(event) {
    // Prevent the page from refreshing when form is submitted so that the apiCall will be called. 
    event.preventDefault();
    const user = { UserName: username, Password: password };
    PearAPI
        .post("User/CheckLogin", user)
        .then(response => {
        if (response.data) {
            // login was successful
            // Give a value to authentictedUser
            setAuthenticatedUser(username); 
            // Saves loggedIn user in localstorage
            localStorage.setItem(LocalStorage.username, username); 
        } else {
            // Login failed
            alert("Login failed!")
        }
        })
        .catch(error => {
         alert("Error retrieving desired data from server: " + error);
        });
    }
    return (
        <>
           <form className="logInForm" onSubmit={handleSubmit}>
                <label>
                    <h2 className="loginH2">USERNAME</h2>
                    <input type="text" placeholder="Enter username..." value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <br/>
                    <label>
                    <h2 className="loginH2"> PASSWORD </h2> 
                    <input type="password" placeholder="Enter password..." value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <br/>
                    <button className="logInbutton" type="submit">Log in</button>
            </form>
        </>
    )
}; 