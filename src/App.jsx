
import './App.css'
import Navbar from './components/Navbar/Navbar';


//Import Components
import PlayerList from './components/PlayerList/PlayerList.jsx';
import MyTeam from './components/MyTeam/MyTeam.jsx';

import {useEffect, useState} from "react";
import * as playerService from "../services/playerService.js";
const {fetchPlayers} = playerService; //Destructure - Access fetchPlayers() directly


const App = () => {

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



  return (

    <>
    
      <Navbar />
    
      <PlayerList playerList={playerList} setMyTeam={setMyTeam} myTeam={myTeam} />

      <MyTeam myTeam={myTeam} setMyTeam={setMyTeam}/>

    </>

  )

}

export default App;
