
import './App.css'
import Navbar from './components/Navbar/Navbar';


//Import Components
import PlayerList from './components/PlayerList.jsx';

import {useEffect, useState} from "react";
import * as playerService from "../services/playerService.js";
const {fetchPlayers} = playerService; //Destructure - Access fetchPlayers() directly


const App = () => {

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
      <h1>WELCOME</h1>
    </main> )
}

export default App;
