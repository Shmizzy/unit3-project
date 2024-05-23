import MyTeam from "../MyTeam/MyTeam.jsx";
import Navbar from "../Navbar/Navbar.jsx"
import PlayerList from "../PlayerList/PlayerList.jsx";
import {useEffect, useState} from "react";
import * as playerService from "../../services/playerService.js";


const {fetchPlayers} = playerService; //Destructure - Access fetchPlayers() directly

const Dashboard = (props) => {
    //State
  
  const [playerList, setPlayerList] = useState([]);
  const [myTeam, setMyTeam] = useState([]);

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
            <PlayerList playerList={playerList} setMyTeam={setMyTeam} myTeam={myTeam} />
            <MyTeam myTeam={myTeam} setMyTeam={setMyTeam}/>
        </main>
    )
}

export default Dashboard;