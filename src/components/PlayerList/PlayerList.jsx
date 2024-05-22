

const PlayerList = (props) => {

    const {playerList, setMyTeam, myTeam} = props;

    //Functions
    const handleAdd = (player) => {
        setMyTeam([...myTeam, player]);
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
                        <button onClick={()=> handleAdd(player)} disabled={myTeam.length === 5 || false}>Add</button>
                    </li>
                )
            })}
        </ul>
    </div>

  )
}

export default PlayerList;