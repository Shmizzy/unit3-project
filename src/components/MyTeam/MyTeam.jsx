//Import
import NBAForm from "../NBA-Form/NBAForm";
import {useState} from "react";
import * as authService from '../../services/userAuth';
import { useContext } from 'react';
import { AuthedUserContext } from '../../App';



const MyTeam = (props) => {
    const user = useContext(AuthedUserContext);
    const {myTeam, setMyTeam} = props;

    //State
    const [renderNBAForm, setRenderNBAForm] = useState("");

    //Functions
    const handleRemove = (subIndex) => {
        console.log(myTeam)
        const filteredTeam = [...myTeam].filter((mainPlayer,mainIndex) => {
            return mainIndex !== subIndex;
        });
        setMyTeam(filteredTeam);
    };

    const handleSetTeam = async () => {
        const res = await authService.createTeam(myTeam, user._id);
        console.log(res)
        setMyTeam([]);
    }
    
  return (

    <div className="myTeamContainer">
        <h2>My Team: </h2>
        <h4 onClick={()=> setRenderNBAForm("form")}>NBA</h4>
        {renderNBAForm === "form" && (
            <NBAForm setRenderNBAForm={setRenderNBAForm}/>
        )}

        <ul>
            {myTeam.map((player,index)=>{
                return (
                    <li key={index}>
                        <h3>Player: {player.first_name} {player.last_name}</h3>
                        <h3>Team: {player.team}</h3>
                        <h3>Rating: {player.rating}</h3>
                        <button onClick={()=> handleRemove(index)}>Remove</button>
                    </li>
                )
            })}
        </ul>

        {myTeam.length === 5 && (
            <button onClick={handleSetTeam}>Save Team</button>
        )}

    </div>

  )
}

export default MyTeam;