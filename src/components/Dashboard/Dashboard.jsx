import MyTeam from "../MyTeam/MyTeam.jsx";
import Form from "../Form/Form.jsx";
import PlayerList from "../PlayerList/PlayerList.jsx";
import {useEffect, useState} from "react";
import * as playerService from "../../services/playerService.js";
import "./Dashboard.css";

const {fetchPlayers, deletePlayer, createPlayer, editPlayer} = playerService; //Destructure - Access fetchPlayers() directly

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

            <div className="left-cell">
              <button id="playerFormBtn" onClick={()=> setPlayerForm("form")} style={playerForm === "form" ? {display: "none"} : {color: "black"}}>Player Form</button>
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
              setPlayerForm={setPlayerForm}
              />
            </div>
          
            <div className="right-cell">
              <MyTeam 
              myTeam={myTeam}
              setMyTeam={setMyTeam}
              />
            </div>
            
        </main>
    )
}

export default Dashboard;