import { createContext,useEffect,useState } from 'react';
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
  useEffect(() => {
    const fetchData = async() => {
      try {
        const token = localStorage.getItem('token');
        if(!token) return null;
        const res = await fetch('http://localhost:3000/auth/' + user.id ,{
            headers: { Authorization: 'Bearer ' + token}
        });
        const data = await res.json();
        console.log(data)
        setUser(data.user)
    } catch (error) {
        console.log(error)
    }
    }
    fetchData();
  }, [])


  return(
    <AuthedUserContext.Provider value={user}>
      <Navbar handleSignout={handleSignout}/>
      <Routes>
        <Route path='/' element={<Dashboard handleSignout={handleSignout}/>} />
        <Route path='/register' element={<Signup setUser={setUser}/>} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
      </Routes>
    </AuthedUserContext.Provider>
     );
}


export default App;
