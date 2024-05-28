

const BattleConfirm = ({battlePlayerTeam, userTeam}) => {

    console.log("Opponent Team", battlePlayerTeam.team);
    console.log("User team: ", userTeam);

    //Calculate userTeam overall rating
    const ratingsArray = userTeam.map((element)=>{
        return element.rating;
    });
    const sumRatings = ratingsArray.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue;
    }, 0);
    const overallRating = sumRatings / userTeam.length;

  return (

    <>

        <div className="userContainer">
            <h1>My Team</h1>
            <h2>Team Overall: {overallRating}</h2>
            <ul>
            {userTeam.map((element, index)=>{
                return (
                    <li key={index}>
                        <h3>{element.first_name} {element.last_name}</h3>
                        <h3>Rating: {element.rating}</h3>
                    </li>
                )
            })}
            </ul>
        </div>
        <hr />
        <div className="opponentContainer">
            <h1>{battlePlayerTeam.username}</h1>
            <h2>Team Overall: {battlePlayerTeam.ovr}</h2>
            <h2>Team: </h2>
            <ul>
                {battlePlayerTeam.team.map((element, index)=>{
                    return (
                        <li key={index}>
                            <h3>{element.first_name} {element.last_name}</h3>
                            <h3>Rating: {element.rating}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
   
    </>

  )
}

export default BattleConfirm;