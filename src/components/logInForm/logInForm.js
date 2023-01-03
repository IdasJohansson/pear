import "../../shared/global/style.css"
import "./logInForm.css"

export const LogInForm = () => {

    return (
        <>
           <form className="logInForm">
                <label>
                    <input placeholder="Enter username"></input>
                </label><br/>
                <label>
                    <input placeholder="Enter password"></input>
                </label><br/>
                <button> LOG IN </button>
            </form>
        </>
    )
}