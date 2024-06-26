import "./PlayerList.css";

const PlayerList = (props) => {

    const {playerList, setMyTeam, myTeam, handleDeletePlayer, setPlayerToEdit, setPlayerForm} = props;

    //Functions
    const handleAdd = (player) => {
        setMyTeam([...myTeam, player]);
    };

    const handleDelete = (id) => {
        handleDeletePlayer(id);
    };

    const handleEdit = (player) => {
        setPlayerToEdit(player);
    }


  return (

    <div className="playerListContainer">
        <h2 id="title">Locker-Room</h2>
        <ul id="playerList">
            {playerList.map((player)=>{
                return (
                    <li  id="playerListItems" key={player._id}>
                        <h3>Player: {player.first_name} {player.last_name}</h3>
                        <h3>Team: {player.team}</h3>
                        <h3>Rating: {player.rating}</h3>
                        <button id="addBtn" onClick={()=> handleAdd(player)} disabled={myTeam.length === 5 || false}>Add</button>
                        <button id="editBtn" onClick={()=> {handleEdit(player); setPlayerForm("form")}}>Edit</button>
                        <button id="deleteBtn" onClick={()=> handleDelete(player._id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    </div>

  )
}

export default PlayerList;