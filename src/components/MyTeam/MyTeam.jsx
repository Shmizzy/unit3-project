//Import
import NBAForm from "../NBA-Form/NBAForm";
import {useState} from "react";
shmizzyz/Battle
import * as authService from '../../services/userAuth';
import { useContext } from 'react';
import { AuthedUserContext } from '../../App';
import { useNavigate } from "react-router-dom";


import * as playerService from "../../services/playerService";

const {fetchNBATeam} = playerService;



const MyTeam = (props) => {
    const user = useContext(AuthedUserContext);
    const navigate = useNavigate();
    const {myTeam, setMyTeam} = props;
    

    //State
    const [renderNBAForm, setRenderNBAForm] = useState("");
    const [NBALogo, setNBALogo] = useState(null);
    const [NBATeamName, setNBATeamName] = useState("");

    //Functions
    const handleRemove = (subIndex) => {
        const filteredTeam = [...myTeam].filter((mainPlayer,mainIndex) => {
            return mainIndex !== subIndex;
        });
        setMyTeam(filteredTeam);
    };


    const handleSetTeam = async () => {
        const res = await authService.createTeam(myTeam, user._id);     
        setMyTeam([]);
        navigate('/battle');
    }

    const fetchNBATeamData = async (team) => {
        try {
          const NBATeamData = await fetchNBATeam(team);
          setNBALogo(NBATeamData[0].logo); // Logo URL (use as value for src attribute on <img>)
          setNBATeamName(NBATeamData[0].name);
        }catch(error){
          console.error(error);
        }
      };

    
  return (

    <div className="myTeamContainer">
        <h2>My Team: <button onClick={()=> setRenderNBAForm("form")} style={renderNBAForm === "form" ? {display: "none"} : {color: "black"}}>NBA Logo</button> </h2>
        
        {renderNBAForm === "form" && (
            <NBAForm 
            setRenderNBAForm={setRenderNBAForm}
            fetchNBATeamData={fetchNBATeamData}
            />
        )}

        {NBALogo && (<img src={NBALogo} alt="NBALogo" width="100px"/>)}
        
        <h4>{NBATeamName}</h4>

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