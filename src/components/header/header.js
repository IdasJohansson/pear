import "../../shared/global/style.css"
import "./header.css"
import {useNavigate} from "react-router-dom"; 
import routingPath from "../../routes/routingPath";

export const Header = () => {
    const navigate = useNavigate(); 
    const logOut = () => {
        navigate(routingPath.signInView); 
    }

    return (
        <>
        <div className="header-container">
        <button type="submit" onClick={()=> logOut()}> LOG OUT </button>
        </div>
        </>
    )
}