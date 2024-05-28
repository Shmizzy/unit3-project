import { useEffect, useState } from 'react';
import * as authService from "../../services/userAuth";
import * as battleService from '../../services/battle';
import './battle.css'


const Battle = () => {
    const [team, setLoadTeam] = useState([]);
    const [battlePlayers, setBattlePlayers] = useState([]);


    useEffect(() => {
        const onLoad = async () => {
            const loadUser = authService.getUser();
            const loadTeam = await authService.getTeam(loadUser.id);
            const loadBattles = await battleService.fetchBattle();
            setBattlePlayers(loadBattles);
            setLoadTeam(loadTeam);
        }
        onLoad();
    }, [])


    console.log(battlePlayers);
    return (
        <main>
            <div className='myteamView'>
                <h1>My Team:</h1>
                <ul>
                    {team.map((element, index) => {
                        return <li className='playerCard' key={index}>
                            <h3>{`${element.first_name}  ${element.last_name}`}</h3>
                            <p>-Overall: {element.rating}</p>
                            <p>-Team: {element.team}</p>
                        </li>
                    })}
                </ul>
            </div>
            <div className='battlePlayers'>
                {(battlePlayers.length > 0) ? (
                    <h1>Loaded {battlePlayers.length} Players....</h1>
                    
                ) : (
                    <h1>Loading Battles....</h1>
                )}
            </div>
        </main>
    )
}


export default Battle;