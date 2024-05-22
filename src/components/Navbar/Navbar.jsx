import './navBar.css';

const Navbar = (props) => {
    return(
        <div className="navBar">
           <h3 className='battle'>Battle</h3>
           <div className='navButtons'>
            <button>Sign In</button>
            <button>Register</button>
           </div>
        </div>
    )
}

export default Navbar;