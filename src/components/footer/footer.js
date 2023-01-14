import "../../shared/global/style.css"
import "./footer.css"
import img from "../../shared/img/logo512.png"

export const Footer = () => {
    return (
        <>
        <div className="footer-container">
        <img src={img} className="pear-icon" alt="pear" width="50px"/>
        © Copyright Päron AB 2023
        </div>
        </>
    )
}