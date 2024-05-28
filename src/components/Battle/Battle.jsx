import { useEffect, useState } from 'react';
import * as authService from "../../services/userAuth";
import * as battleService from '../../services/battle';
import { useContext } from 'react';
import { AuthedUserContext } from '../../App';
import './battle.css'


const Battle = () => {
    const user = useContext(AuthedUserContext);
    const [team, setLoadTeam] = useState([]);
    const [battlePlayers, setBattlePlayers] = useState([]);
    const filteredBattles = [];

    useEffect(() => {
        const onLoad = async () => {
            const loadUser = authService.getUser();
            const loadTeam = await authService.getTeam(loadUser.id);
            const loadBattles = await battleService.fetchBattle();
            loadBattles.forEach(element => {
                if (element.username !== user.username) {
                    filteredBattles.push(element);
                }
            })
            setBattlePlayers(filteredBattles);
            setLoadTeam(loadTeam);
        }
        onLoad();
    }, [])

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

            </div>
        </main>
    )
}


export default Battle;