

const PlayerList = (props) => {

    const {playerList, setMyTeam, myTeam, handleDeletePlayer, setPlayerToEdit} = props;

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
        <h2>Locker-Room</h2>
        <ul>
            {playerList.map((player)=>{
                return (
                    <li key={player._id}>
                        <h3>First Name: {player.first_name}</h3>
                        <h3>Last Name: {player.last_name}</h3>
                        <h3>Team: {player.team}</h3>
                        <h3>Rating: {player.rating}</h3>
                        <button onClick={()=> handleAdd(player)} disabled={myTeam.length === 5 || false}>Add</button>
                        <button onClick={()=> handleEdit(player)}>Edit</button>
                        <button onClick={()=> handleDelete(player._id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    </div>

  )
}

export default PlayerList;