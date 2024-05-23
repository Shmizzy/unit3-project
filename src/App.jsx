
import './App.css'
<<<<<<< HEAD
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
=======

>>>>>>> e7cc918e3edeb2d79542a375526fa592b843f65f



const App = () => {


<<<<<<< HEAD
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
=======
  useEffect(()=>{
    fetchPlayersDatabase();
  }, [])



  return (

    <>
      
      <PlayerList playerList={playerList} setMyTeam={setMyTeam} myTeam={myTeam} />

      <MyTeam myTeam={myTeam} setMyTeam={setMyTeam}/>

    </>

  )
>>>>>>> e7cc918e3edeb2d79542a375526fa592b843f65f

}

export default App;
