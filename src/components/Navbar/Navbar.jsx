import './navBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthedUserContext } from '../../App';


const Navbar = ({handleSignout}) => {
    const user = useContext(AuthedUserContext);
    
    if(user){
        return (
            <div className="navBar">
                <Link to='/battle'><h3 className='battle'>Battle</h3></Link>
                <h3>{user.username}</h3>
                <div className='navButtons'>
                    <button onClick={handleSignout}>Log Out</button>
               </div>
            </div>
        )
     }else{
        return (
            <div className="navBar">
                <div className='navButtons'>
                    <Link to='/login'><button>Sign In</button></Link>
                    <Link to='/register'><button>Register</button></Link>
                </div>
            </div>
           )
     } 
}

export default Navbar;