//Import
import {useState} from "react";


const NBAForm = ({setRenderNBAForm}) => {

    //State
    const [formData, setFormData] = useState({
        nbaTeam: "",
    });

    //Functions
    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

  return (

    <form>
        <label htmlFor="nbaTeam">Team Name: </label>
        <input id="nbaTeam" type="text" name="nbaTeam" value={formData.nbaTeam} onChange={handleInputChange}></input>
        <button type="submit">+</button>
        <button onClick={()=> setRenderNBAForm("")}>Back</button>

    </form>

  )
}

export default NBAForm;