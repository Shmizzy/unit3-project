import "./BattleConfirm.css";
import * as authService from "../../services/userAuth";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthedUserContext } from '../../App';


const BattleConfirm = ({ battlePlayerTeam }) => {
    const navigate = useNavigate();
    const user = useContext(AuthedUserContext);

    console.log("Opponent Team", battlePlayerTeam.team);
    console.log("User team: ", user.team);

    //Calculate userTeam overall rating

    const handleWin = async () => {
        try {
            await authService.takeW(user._id);
            await authService.giveL(user._id, battlePlayerTeam._id);
            navigate("/battle/win");
        } catch (error) {
            console.log(error)
        }

    }
    const handleLoss = async () => {
        try {
            await authService.takeL(user._id);
            await authService.giveW(user._id, battlePlayerTeam._id);
            navigate("/battle/lost");
        } catch (error) {
            console.log(error)
        }

    }

    const handleBattle = () => {
        console.log(user.ovr, battlePlayerTeam.ovr)
        const randomNumber = Math.random();
        const sum = user.ovr + battlePlayerTeam.ovr;
        const userProbability = user.ovr / sum;
        console.log(userProbability);

        if (randomNumber < userProbability) {
            handleWin();
            navigate('/battle');
        } else {
            handleLoss();
            navigate('/battle');
        }
    }

    return (

        <>
            <main>
                <div className="userContainer">
                    <h1>My Team</h1>
                    <h2>Team Overall: {`${user.ovr}`}</h2>
                    <ul className="teamList">
                        {user.team && user.team.map((element, index) => {
                            return (
                                <li key={index} className="listItems">
                                    <h3>{element.first_name} {element.last_name}</h3>
                                    <h3>Rating: {element.rating}</h3>
                                </li>
                            )
                        })}
                    </ul>
                    <button style={{backgroundColor: "green", color: "white"}} onClick={handleBattle}>Start</button>
                </div>

                <div className="opponentContainer">
                    <h1>{battlePlayerTeam.username}</h1>
                    <h2>Team Overall: {battlePlayerTeam.ovr}</h2>
                    <ul className="teamList">
                        {battlePlayerTeam.team.map((element, index) => {
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