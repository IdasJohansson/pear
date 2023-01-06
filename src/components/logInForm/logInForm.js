import "../../shared/global/style.css"
import "./logInForm.css"
import {useNavigate} from "react-router-dom"; 
import routingPath from "../../routes/routingPath";

export const LogInForm = () => {
    const navigate = useNavigate(); 
    const logIn = () => {
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