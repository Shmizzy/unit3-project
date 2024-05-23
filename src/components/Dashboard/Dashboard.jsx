import MyTeam from "../MyTeam/MyTeam.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Form from "../Form/Form.jsx";
import PlayerList from "../PlayerList/PlayerList.jsx";
import {useEffect, useState} from "react";
import * as playerService from "../../services/playerService.js";

const {fetchPlayers, fetchNBATeam, deletePlayer, createPlayer} = playerService; //Destructure - Access fetchPlayers() directly

const Dashboard = () => {
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

  const fetchNBATeamData = async (team) => {
    try {
      const NBATeamData = await fetchNBATeam(team);
      console.log(NBATeamData[0].name); //Fetched NBA Data is an array with one object after searching by team name
    }catch(error){
      console.error(error);
    }
  };

  const handleDeletePlayer = async (id) => {
    try {
      await deletePlayer(id);
      fetchPlayersDatabase();
    }catch(error){
      console.error(`Error deleting track ${error}`);
    }
  };

  const handleCreatePlayer = async (playerData) => {
      try{
        await createPlayer(playerData);
        fetchPlayersDatabase();
      }catch(error){
        console.error(`Error adding track: ${error}`);
      }
  };

  useEffect(()=>{
    fetchPlayersDatabase();
  }, [])

    return(
        <main>

            <Navbar />

            <Form 
            handleCreatePlayer={handleCreatePlayer}
            />

            <PlayerList 
            playerList={playerList}
            setMyTeam={setMyTeam}
            myTeam={myTeam}
            handleDeletePlayer={handleDeletePlayer}
            />

            <MyTeam 
            myTeam={myTeam}
            setMyTeam={setMyTeam}
            />
            
        </main>
    )
}

export default Dashboard;