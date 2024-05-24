//Import
import {useState} from "react";


const NBAForm = ({setRenderNBAForm, fetchNBATeamData}) => {

    //State
    const [formData, setFormData] = useState({
        nbaTeam: "",
    });

    //Functions
    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //Fetch logic
        fetchNBATeamData(formData.nbaTeam);
        setFormData({nbaTeam: "",});
    };

  return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="nbaTeam">Team Name: </label>
        <input id="nbaTeam" type="text" name="nbaTeam" value={formData.nbaTeam} onChange={handleInputChange}></input>
        <button type="submit" disabled={formData.nbaTeam === "" || false}>+</button>
        <button onClick={()=> setRenderNBAForm("")}>Back</button>
    </form>

  )
}

export default NBAForm;