import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/userAuth';

const Signup = (props) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState(['']);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmedPassword: '',
        
    });

    const updateMessage = (msg) => {
        setMessage(msg);
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = await authService.register(formData);
                props.setUser(newUser.user);
                navigate('/')
        } catch (error) {
            updateMessage(error.message);
        }
    }

    const { username, password, confirmedPassword } = formData;

    const formValid = () => {
        return !(username && password && confirmedPassword === password)
    }
    
    return (
        <main>
            <h1>Sign Up!</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
                <label htmlFor="confirmedPassword">Confirm Password:</label>
                <input type="password" name="confirmedPassword" id="confirmedPassword" value={formData.confirmedPassword} onChange={handleChange} />
                <button type='submit' disabled={formValid()}>Register</button>
            </form>
        </main>
    )
}

export default Signup;