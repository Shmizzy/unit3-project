import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/userAuth';


const Login = (props) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState([''])
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const updateMessage = (msg) => {
        setMessage(msg);
    };
    const handleChange = (e) => {
        updateMessage('');
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const user = await authService.login(formData);
            console.log(user);
                props.setUser(user);
                navigate('/');     
        } catch (error) {
            updateMessage(error.message)
        }
    };

    return (
        <main>
            <h1>Login</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="email">Username:</label>
                <input type="text" id="username" value={formData.username} name="username" onChange={handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" autoComplete="off" id="password" value={formData.password} name="password" onChange={handleChange} />
                <button type='submit'>Log In</button>
                <Link to="/"><button>Cancel</button></Link>
            </form>
        </main>
    )
}

export default Login