import { Link } from "react-router-dom";
import "./BattleConfirm.css";

const BattleLost = () => {

  return (
    
        <div className="results">
            <h1 className="resultMessage">Sorry, You Lost!</h1>
            <button style={{backgroundColor: "blue"}}><Link to="/battle" style={{textDecoration: "none", color: "white"}}>Play Again</Link></button>
        </div>
    
    
  )
}

export default BattleLost;