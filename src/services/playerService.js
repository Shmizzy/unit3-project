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
        console.error(error);
    }
};

const fetchNBATeam = async (team) => {
    try{
        const response = await fetch(`${BASE_URL_NBA_TEAMS}/${team}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
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
        console.error(error);
    }
};



//Export
export {fetchPlayers, fetchNBATeam, deletePlayer};