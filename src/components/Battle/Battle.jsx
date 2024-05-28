import { useEffect,useState } from 'react';
import * as authService from "../../services/userAuth";
import './battle.css';

import BattleUsers from '../BattleUsers/BattleUsers';




const Battle = () => {
    const [team, setLoadTeam] = useState([]);

    //Calculate Average
    const copyTeam = [...team];
    const ratingsArray = copyTeam.map((element)=>{
        return element.rating;
    });
    const sumRating = ratingsArray.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue
    },0);
    const overallRating = sumRating / (ratingsArray.length);

    
    useEffect(()=> {
        const onLoad = async () => {
            const loadUser = authService.getUser();
            const loadTeam =  await authService.getTeam(loadUser.id);
            setLoadTeam(loadTeam);
        }
        onLoad();
    }, [])
    
    return(
        <main>

            <div className="leftContainer">
                <h3>My Team - Overall: {overallRating}</h3>
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
                <BattleUsers />
            </div>

        </main>
    )
}


export default Battle;