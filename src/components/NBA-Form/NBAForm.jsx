//Import
import {useState} from "react";


const NBAForm = ({setRenderNBAForm, fetchNBATeamData}) => {

    //State
    const [selectedTeam, setSelectedTeam] = useState("");

    //Functions
    const handleInputChange = (event) => {
        setSelectedTeam(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchNBATeamData(selectedTeam);
        setSelectedTeam("");
    };

  return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="nbaTeam">Choose Team: </label>
        <select id="nbaTeam" value={selectedTeam} onChange={handleInputChange}>
            <option value="">------ Select ------</option>
            <option value="Chicago Bulls">Chicago Bulls</option>
            <option value="Boston Celtics">Boston Celtics</option>
            <option value="New York Knicks">New York Knicks</option>
            <option value="Toronto Raptors">Toronto Raptors</option>
        </select>
        <button type="submit" disabled={selectedTeam === "" || false}>+</button>
        <button onClick={()=> setRenderNBAForm("")}>Back</button>
    </form>

  )
}

export default NBAForm;