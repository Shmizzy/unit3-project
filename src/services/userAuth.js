const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

const register = async (formData) => {
    try {
        const res = await fetch(BASE_URL + '/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            const user = JSON.parse(atob(data.token.split('.')[1]));
            return (user, data.user);
        }
        if (data.message) {
            throw new Error(data.message);
        }
    } catch (error) {
        console.log(error)
    }
}

const login = async (formData) => {
    try {
        const res = await fetch(BASE_URL + '/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.token) {
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
const createTeam = async (teamData, userId) => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        const res = await fetch(`${BASE_URL}/auth/${userId}/updateTeam`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ team: teamData })
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}
const setOvr = async (ovr, userId) => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        const res = await fetch(`${BASE_URL}/auth/${userId}/updateOvr`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ovr: ovr })
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

const setLogo = async (logo, userId) => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        const res = await fetch(`${BASE_URL}/auth/${userId}/updateLogo`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ logo: logo })
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}
const takeL = async (userId) => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        const res = await fetch(BASE_URL + `/auth/${userId}/takeL`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}
const takeW = async (userId) => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        const res = await fetch(BASE_URL + `/auth/${userId}/takeW`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}
const giveL = async (userId, challengerId) => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        const res = await fetch(BASE_URL + `/auth/${userId}/giveL/${challengerId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}
const giveW = async (userId, challengerId) => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        const res = await fetch(BASE_URL + `/auth/${userId}/giveW/${challengerId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}



const getTeam = async (userId) => {

    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        const res = await fetch(`${BASE_URL}/auth/${userId}/getTeam`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json();
        return data.team;
    } catch (error) {
        console.log(error)
    }
}


const getUser = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const user = JSON.parse(atob(token.split('.')[1]));

    return user;
}
const getUserData = async(id) => {
    try {
        const token = localStorage.getItem('token');
        if(!token) return null;
        const res = await fetch(BASE_URL + '/auth/' + id ,{
            headers: { Authorization: 'Bearer ' + token}
        });
        const data = await res.json();
        return data.user;
    } catch (error) {
        console.log(error)
    }
}

const signOut = () => {
    localStorage.removeItem('token');
}



export { register, getUser, getUserData,signOut, login, createTeam, getTeam, setOvr, setLogo, takeL, takeW, giveL, giveW };