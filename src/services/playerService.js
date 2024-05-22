//Variables
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/players`;

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



//Export
export {fetchPlayers};