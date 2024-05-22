


const MyTeam = (props) => {
    
    const {myTeam, setMyTeam} = props;

    //Functions
    const handleRemove = (player) => {
        console.log(myTeam)
        const filteredTeam = [...myTeam].filter((mainPlayer) => {
            return mainPlayer !== player;
        });
        setMyTeam(filteredTeam);
    };
    
  return (

    <div className="myTeamContainer">
        <h2>My Team: </h2>
        <ul>
            {myTeam.map((player)=>{
                return (
                    <li key={player._id}>
                        <h3>Player: {player.first_name} {player.last_name}</h3>
                        <h3>Team: {player.team}</h3>
                        <button onClick={()=> handleRemove(player)}>Remove</button>
                    </li>
                )
            })}
        </ul>

        {myTeam.length === 5 && (
            <button>Save Team</button>
        )}

    </div>

  )
}

export default MyTeam;