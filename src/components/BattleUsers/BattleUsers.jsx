//Import
import * as mockData from "./mock-data.js";
const { userData } = mockData; // Mock Data - Replace with fetched data from user object to populate their corresponding team configuration




const BattleUsers = ({ battlePlayers }) => {




  return (

    <ul>
      {battlePlayers.map((element, index) => {
        return (
          <li key={index}>
            <h3>{element.username}</h3>
            {/* <h4>{element.teamName}</h4> */}
            <img src={element.logo} alt="teamLogo" width="75px" /> 
            <h4>Overall: {element.ovr}</h4>
            <button>Battle</button>
          </li>
        )
      })}
    </ul>

  )
}


export default BattleUsers;