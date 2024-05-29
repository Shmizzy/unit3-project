//Import
import * as mockData from "./mock-data.js";
const { userData } = mockData; // Mock Data - Replace with fetched data from user object to populate their corresponding team configuration
import { Link } from "react-router-dom";
import "./BattleUsers.css";



const BattleUsers = ({ battlePlayers, liftState }) => {

  const handleClick = (battlePlayerData) => {
    liftState(battlePlayerData);
    console.log(battlePlayerData);
  };

  return (

    <ul>
      {battlePlayers.map((element, index) => {
        return (
          <li key={index} id="loadedPlayers">
            <h3 className="playerTitle">{element.username}</h3>

            {/* <h4>{element.teamName}</h4> */}
            <img src={element.logo} alt="teamLogo" width="75px" /> 
            <h4>Overall: {element.ovr}</h4>
            <h4>Record: W:{element.win} L: {element.loss}</h4>
            <button style={{backgroundColor: "green"}} onClick={()=> handleClick(element)}><Link to="/battle/confirm" style={{textDecoration: "none", color: "white"}}>Battle</Link></button>
          </li>
        )
      })}
    </ul>

  )
}


export default BattleUsers;