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
        {/* NOTE: Had to change how we were capturing the string value to insert as argument in our fetchNBATeamData() function - the selected "option value" (in string format) is the value for the "selectedTeam" state variable and the change is handled similarly using the state setter function and "event.target.value" because it is still considered an input and that is how we access it from the DOM */}
        <select id="nbaTeam" value={selectedTeam} onChange={handleInputChange}>
            <option value="">------ Select ------</option>
            <option value="Chicago Bulls">Chicago Bulls</option>
            <option value="Boston Celtics">Boston Celtics</option>
            <option value="New York Knicks">New York Knicks</option>
            <option value="Brooklyn Nets">Brooklyn Nets</option>
            <option value="Philadelphia 76ers">Philadelphia 76ers</option>
            <option value="Toronto Raptors">Toronto Raptors</option>
            <option value="Golden State Warriors">Golden State Warriors</option>
            <option value="LA Clippers">LA Clippers</option>
            <option value="
Los Angeles Lakers">
Los Angeles Lakers</option>
            <option value="Phoenix Suns">Phoenix Suns</option>
            <option value="Sacramento Kings">Sacramento Kings</option>
            <option value="Cleveland Cavaliers">Cleveland Cavaliers</option>
            <option value="Detroit Pistons">Detroit Pistons</option>
            <option value="Indiana Pacers">Indiana Pacers</option>
            <option value="Milwaukee Bucks">Milwaukee Bucks</option>
            <option value="Atlanta Hawks">Atlanta Hawks</option>
            <option value="Charlotte Hornets">Charlotte Hornets</option>
            <option value="Miami Heat">Miami Heat</option>
            <option value="Orlando Magic">Orlando Magic</option>
            <option value="Washington Wizards">Washington Wizards</option>
            <option value="Denver Nuggets">Denver Nuggets</option>
            <option value="Minnesota Timberwolves">Minnesota Timberwolves</option>
            <option value="Oklahoma City Thunder">Oklahoma City Thunder</option>
            <option value="Portland Trail Blazers">Portland Trail Blazers</option>
            <option value="Utah Jazz">Utah Jazz</option>
            <option value="Dallas Mavericks">Dallas Mavericks</option>
            <option value="Houston Rockets">Houston Rockets</option>
            <option value="Memphis Grizzlies">Memphis Grizzlies</option>
            <option value="New Orleans Pelicans">New Orleans Pelicans</option>
            <option value="San Antonio Spurs">San Antonio Spurs</option>
        </select>
        <button type="submit" disabled={selectedTeam === "" || false}>+</button>
        <button onClick={()=> setRenderNBAForm("")}>Back</button>
    </form>

  )
}

export default NBAForm;