//Import
import * as mockData from "./mock-data.js";
const {userData} = mockData; // Mock Data - Replace with fetched data from user object to populate their corresponding team configuration


const BattleUsers = () => {

  return (

    <ul>
        {userData.map((element, index)=>{
            return (
                <li key={index}>
                    <h3>{element.userName}</h3>
                    <h4>{element.teamName}</h4>
                    <img src={element.teamLogo} alt="teamLogo" width="75px"/>
                    <h4>{element.teamOverall()}</h4>
                    <button>Battle</button>
                </li>
            )
        })}
    </ul>

  )
}

export default BattleUsers;