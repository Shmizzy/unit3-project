

const PlayerList = ({playerList}) => {

    
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
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default PlayerList;