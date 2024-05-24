import MyTeam from "../MyTeam/MyTeam.jsx";
import Form from "../Form/Form.jsx";
import PlayerList from "../PlayerList/PlayerList.jsx";
import {useEffect, useState} from "react";
import * as playerService from "../../services/playerService.js";

const {fetchPlayers, fetchNBATeam, deletePlayer, createPlayer, editPlayer} = playerService; //Destructure - Access fetchPlayers() directly

const Dashboard = () => {

    //State
  const [playerList, setPlayerList] = useState([]);
  const [myTeam, setMyTeam] = useState([]);
  const [playerToEdit, setPlayerToEdit] = useState(null);
  const [playerForm, setPlayerForm] = useState("");

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
      console.error(`Error deleting player ${error}`);
    }
  };

  const handleCreatePlayer = async (playerData) => {
      try{
        await createPlayer(playerData);
        fetchPlayersDatabase();
      }catch(error){
        console.error(`Error adding player: ${error}`);
      }
  };

  const handleEditPlayer = async (id, playerData) => {
    try{
      await editPlayer(id, playerData);
      fetchPlayersDatabase();
    }catch(error){
      console.error(`Error editing player: ${error}`);
    }
  };

  useEffect(()=>{
    fetchPlayersDatabase();
  }, [])

  

    return(
        <main>

            <h4 onClick={()=> setPlayerForm("form")}>Player Form</h4>
            {playerForm === "form" && (
              <Form 
              handleCreatePlayer={handleCreatePlayer}
              playerToEdit={playerToEdit}
              setPlayerToEdit={setPlayerToEdit}
              handleEditPlayer={handleEditPlayer}
              setPlayerForm={setPlayerForm}
              />
            )}

            <PlayerList 
            playerList={playerList}
            setMyTeam={setMyTeam}
            myTeam={myTeam}
            handleDeletePlayer={handleDeletePlayer}
            setPlayerToEdit={setPlayerToEdit}
            />

            <MyTeam 
            myTeam={myTeam}
            setMyTeam={setMyTeam}
            />
            
        </main>
    )
}

export default Dashboard;