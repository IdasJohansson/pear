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
                    <input placeholder="Enter username"></input>
                </label><br/>
                <label>
                    <input placeholder="Enter password"></input>
                </label><br/>
                <button type="submit" onClick={()=> logIn()}> LOG IN </button>
            </form>
        </>
    )
}; 