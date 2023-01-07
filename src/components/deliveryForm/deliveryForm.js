import "../../shared/global/style.css"
import "./deliveryForm.css"

export const DeliveryForm = () => {

    const saveInput = () => {
     
    }

    return (
        <>
           <form className="deliveryForm">
                <label>

                <div className="dropdown">
                        <label for dropdown> In/Out: </label> <br/>
                        <select name="dropdown">
                        <option>In</option>
                        <option>Out</option>
                        </select>
                    </div>

                <div className="dropdown">
                        <label for dropdown> Warehouse: </label> <br/>
                        <select name="dropdown">
                        <option>Cupertino</option>
                        <option>Norrköping</option>
                        <option>Frankfurt</option>
                        </select>
                    </div>

                    <div className="dropdown">
                        <label for dropdown> Product: </label> <br/>
                        <select name="dropdown">
                        <option>JTelefon</option>
                        <option>JPlatta</option>
                        <option>Päronklocka</option>
                        </select>
                    </div>
                    <input placeholder="pcs" type="text" name="inbound"></input>
                </label><br/>
            
                <button type="submit" onClick={saveInput()}> SAVE </button>
                
            </form>

         
        </>
    )
}; 
