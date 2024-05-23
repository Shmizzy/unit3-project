// import './navBar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div className="navBar">
           <h3 className='battle'>Battle</h3>
           <div className='navButtons'>
            <Link to='/login'><button>Sign In</button></Link>
            <Link to='/register'><button>Register</button></Link>
           </div>
        </div>
    )
}

export default Navbar;