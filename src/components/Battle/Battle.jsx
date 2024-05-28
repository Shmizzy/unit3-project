import { useEffect, useState } from 'react';
import * as authService from "../../services/userAuth";

import * as battleService from '../../services/battle';
import './battle.css'

import './battle.css';

import BattleUsers from '../BattleUsers/BattleUsers';




const Battle = () => {
    const [team, setLoadTeam] = useState([]);
    const [battlePlayers, setBattlePlayers] = useState([]);




    //Calculate Average


    useEffect(() => {

        const onLoad = async () => {
            const loadUser = authService.getUser();
            const loadTeam = await authService.getTeam(loadUser.id);
            const loadBattles = await battleService.fetchBattle();
            setBattlePlayers(loadBattles);
            setLoadTeam(loadTeam);
            const copyTeam = [...team];
            const ratingsArray = copyTeam.map((element) => {
                return element.rating;
            });
            const sumRating = ratingsArray.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            }, 0);
            /*             const overallRating = sumRating / (ratingsArray.length);
             */
        }
        onLoad();
    }, [])


    console.log(battlePlayers);
    return (
        <main>

            <div className="leftContainer">
                <h3>My Team </h3>
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

                <BattleUsers battlePlayers={battlePlayers}/>
            </div>
            
        </main>
    )
}


export default Battle;