import Navbar from "../Navbar/Navbar.jsx"
import PlayerList from "../Playerlist/Playerlist.jsx";
import {useEffect, useState} from "react";
import * as playerService from "../../services/playerService.js";
const {fetchPlayers} = playerService; //Destructure - Access fetchPlayers() directly

const Dashboard = () => {
    //State
  const [playerList, setPlayerList] = useState([]);
  
  //Functions
  const fetchPlayersDatabase = async () => {
    try{
      const listOfPlayers = await fetchPlayers();
      setPlayerList(listOfPlayers);
    }catch(error){
      console.error(`Error fetching players: ${error}`);
    }
  };

  useEffect(()=>{
    fetchPlayersDatabase();
  }, [])

    return(
        <main>
            <Navbar />
            <PlayerList playerList={playerList}/>
        </main>
    )
}

export default Dashboard;