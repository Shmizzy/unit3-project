import { createContext,useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import * as authService from "./services/userAuth.js";

export const AuthedUserContext = createContext(null);


const App = () => {
  const [user, setUser] = useState(authService.getUser());  

  const handleSignout = () => {
    authService.signOut();
    setUser(null);
  }

  return(
    <>
      <Navbar handleSignout={handleSignout} user={user}/>
      <Routes>
        <Route path='/' element={<Dashboard handleSignout={handleSignout}/>} />
        <Route path='/register' element={<Signup setUser={setUser}/>} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
      </Routes>
    </>
     );
}


export default App;
