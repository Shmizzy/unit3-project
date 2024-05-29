import { createContext,useEffect,useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import * as authService from "./services/userAuth.js";
import Battle from './components/Battle/Battle.jsx';
import BattleConfirm from './components/BattleConfirm/BattleConfirm.jsx';
import BattleWin from './components/BattleConfirm/BattleWin.jsx';
import BattleLost from './components/BattleConfirm/BattleLost.jsx';

export const AuthedUserContext = createContext(null);


const App = () => {
  const [user, setUser] = useState(authService.getUser());  

  //State - Populate BattleConfirm
  const [battlePlayerTeam, setBattlePlayerTeam] = useState();

  const handleSignout = () => {
    authService.signOut();
    setUser(null);
  }
  useEffect(() => {
    const fetchData = async() => {
     const userData = await authService.getUserData(user.id);
      setUser(userData)
    }
    fetchData();
  }, []);

  //Function - Lift State and send to BattleConfirm
  const liftState = (battlePlayerTeam) => {
    setBattlePlayerTeam(battlePlayerTeam);
  };

  


  return(
    <AuthedUserContext.Provider value={user}>
      <Navbar handleSignout={handleSignout}/>
      <Routes>
        <Route path='/' element={<Dashboard handleSignout={handleSignout}/>} />
        <Route path='/register' element={<Signup setUser={setUser}/>} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/battle' element={<Battle liftState={liftState} setUser={setUser}/>} />
        <Route path='/battle/confirm' element={<BattleConfirm battlePlayerTeam={battlePlayerTeam} />} />
        <Route path='/battle/win' element={<BattleWin />} />
        <Route path='/battle/lost' element={<BattleLost />} />
      </Routes>
    </AuthedUserContext.Provider>
     );
}


export default App;
