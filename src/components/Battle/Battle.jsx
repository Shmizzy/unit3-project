import { useContext } from 'react';
import { AuthedUserContext } from '../../App';


const Battle = () => {
    const user = useContext(AuthedUserContext);

    return(
        <main>
            <h1>My Team:</h1>
                <h1>{user.team[0].first_name}</h1>       
        </main>
    )
}


export default Battle;