import "../../shared/global/style.css"
import "./logInForm.css"
import { useContext, useState } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage"; 
import Axios from "axios";

export const LogInForm = () => {
    
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

    const [serverResponse, setServerResponse] = useState(""); 

    const fetchData = async () => {
    console.log("Fetch Data"); 
    try {
        const response = await Axios.get("https://localhost:7176/api/User/3fa85f64-5717-4562-b3fc-2c963f66afa6") 
        console.log(response?.data?.userName)   
        setServerResponse(response);   
        console.log(serverResponse) ; 
    } catch (error) {
        alert("Error retrieving desired data from server: " + error);
    }
    console.log("After fetch.")
    }

    return (
        <>
        <button type="submit" onClick={() => fetchData()}> FETCH DATA </button>
           <form className="logInForm">
               {username}
                <label>
                    <h2>USERNAME</h2>
                    <input placeholder="Enter username" type="text" name="username" onChange={(event) => setUsername(event.target.value)}></input>
                </label><br/>
                {/* <label>
                <h2>PASSWORD</h2>
                    <input placeholder="Enter password" type="password" name="password" onChange={(event) => setPassword(event.target.value)}></input>
                </label><br/> */}
                <button type="submit" onClick={()=> logIn()}> LOG IN </button>
            </form>
        </>
    )
}; 