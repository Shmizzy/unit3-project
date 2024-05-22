
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';



//Import Components
import PlayerList from './components/PlayerList/PlayerList.jsx';
import MyTeam from './components/MyTeam/MyTeam.jsx';

import {useEffect, useState} from "react";
import * as playerService from "../services/playerService.js";
const {fetchPlayers} = playerService; //Destructure - Access fetchPlayers() directly


const App = () => {


  return(
    <main>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </main>
     );
}


export default App;
