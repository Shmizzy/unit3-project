const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

const register = async (formData) => {
    try {
        const res = await fetch (BASE_URL + '/auth/register', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
} 

const login = async(formData) => {
    try {
        const res = await fetch(BASE_URL + '/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if(data.token){
            localStorage.setItem('token', data.token);
            const user = JSON.parse(atob(data.token.split('.')[1]));
            return (user, data.user);
        }
        if (data.message) {
            throw new Error(data.message);
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getUser = () => {
    const token = localStorage.getItem('token');
    if(!token) return null;
    const user = JSON.parse(atob(token.split('.')[1]));
    
    return user;
}

const signOut = () => {
    localStorage.removeItem('token');
}


export { register, getUser, signOut, login };