//Variables
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/players`;

const BASE_URL_NBA_TEAMS = `${import.meta.env.VITE_BACK_END_SERVER_URL}/nba`;

//Functions
const fetchPlayers = async () => {
    try{
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data); //Debug
        return data;
    }catch(error){
        console.error(error.message);
    }
};

const fetchNBATeam = async (team) => {
    try{
        const response = await fetch(`${BASE_URL_NBA_TEAMS}/${team}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error.message);
    }
};

const deletePlayer = async(id) => {
    try{
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error.message);
    }
};

const createPlayer = async (playerData) => {
    try{
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(playerData),
        });
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error.message);
    }
};



const editPlayer = async (id, playerData) => {
    try{
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(playerData),
        });
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error.message);
    }
};



//Export
export {fetchPlayers, fetchNBATeam, deletePlayer, createPlayer, editPlayer};