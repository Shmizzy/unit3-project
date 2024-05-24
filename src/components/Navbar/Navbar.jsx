import './navBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthedUserContext } from '../../App';


const Navbar = ({handleSignout}) => {
    const user = useContext(AuthedUserContext);
    
    if(user){
        return (
            <div className="navBar">
                
                <button className='logout' onClick={handleSignout}>Log Out</button>
                <h3>{user._id}</h3>
                <div className='navButtons'>
                    <Link to='/battle'><h3 className='battle'>Battle</h3></Link>
                    <Link to='/'><h3 className='home'>Home</h3></Link>
               </div>
            </div>
        )
     }else{
        return (
            <div className="navBar">
                <h2 className='nbaPlayers'>NBA Players</h2>
                <div className='navButtons'>
                    <Link to='/login'><button>Sign In</button></Link>
                    <Link to='/register'><button>Register</button></Link>
                </div>
            </div>
           )
     } 
}

export default Navbar;