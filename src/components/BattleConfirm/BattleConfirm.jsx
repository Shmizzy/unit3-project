import "./BattleConfirm.css";

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
        <main>
        <div className="userContainer">
            <h1>My Team</h1>
            <h2>Team Overall: {overallRating}</h2>
            <ul className="teamList">
            {userTeam.map((element, index)=>{
                return (
                    <li key={index} className="listItems">
                        <h3>{element.first_name} {element.last_name}</h3>
                        <h3>Rating: {element.rating}</h3>
                    </li>
                )
            })}
            </ul>
            <button>Start</button>
        </div>
        
        <div className="opponentContainer">
            <h1>{battlePlayerTeam.username}</h1>
            <h2>Team Overall: {battlePlayerTeam.ovr}</h2>
            <ul className="teamList">
                {battlePlayerTeam.team.map((element, index)=>{
                    return (
                        <li key={index} className="listItems">
                            <h3>{element.first_name} {element.last_name}</h3>
                            <h3>Rating: {element.rating}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
        </main>

    </>
    
  )
}

export default BattleConfirm;