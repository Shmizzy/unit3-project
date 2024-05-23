import './navBar.css';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    if(props.user){
        return (
            <div className="navBar">
                <h3 className='battle'>Battle</h3>
                <div className='navButtons'>
                    <button onClick={props.handleSignout}>Log Out</button>
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