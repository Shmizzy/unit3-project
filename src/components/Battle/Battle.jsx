import { useEffect, useState } from 'react';
import * as authService from "../../services/userAuth";
import * as battleService from '../../services/battle';
import './battle.css'
import BattleUsers from '../BattleUsers/BattleUsers';
import { useContext } from 'react';
import { AuthedUserContext } from '../../App';



const Battle = ({ liftState,setUser }) => {
    const user = useContext(AuthedUserContext);
    const [team, setLoadTeam] = useState([]);
    const [battlePlayers, setBattlePlayers] = useState([]);

    //Calculate Average


    useEffect(() => {

        const onLoad = async () => {
            const loadUser = authService.getUser();
            const loadUserData = await authService.getUserData(loadUser.id);
            const loadTeam = await authService.getTeam(loadUser.id);
            const loadBattles = await battleService.fetchBattle();
            setUser(loadUserData);
            setBattlePlayers(loadBattles);
            setLoadTeam(loadTeam);
        }
        onLoad();
    }, [])


    console.log(battlePlayers);
    return (
        <main>

            <div className="leftContainer">
                <h3>My Team - Overall: {user.ovr}</h3>
                <h3>Record: {user.win}-{user.loss}</h3>
                <ul>
                    {team.map((element, index) => {
                        return <li className='playerCard' key={index}>
                            <h4>{`${element.first_name}  ${element.last_name}`}</h4>
                            <p>-Overall: {element.rating}</p>
                            <p>-Team: {element.team}</p>
                        </li>

                    })}
                </ul>
            </div>

            <div className="rightContainer">
                {(battlePlayers.length > 0) ? (
                    <h1>Loaded {battlePlayers.length} Players....</h1>

                ) : (
                    <h1>Loading Battles....</h1>
                )}

                <BattleUsers battlePlayers={battlePlayers} liftState={liftState} />
            </div>
        </main>
    )
}


export default Battle;