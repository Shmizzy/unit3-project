import { useEffect,useState } from 'react';
import * as authService from "../../services/userAuth";
import './battle.css'


const Battle = () => {
    const [team, setLoadTeam] = useState([]);
    
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
        </main>
    )
}


export default Battle;