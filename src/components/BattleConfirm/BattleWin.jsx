import { Link } from "react-router-dom";

const BattleWin = () => {

  return (
    
        <div className="results">
            <h1 className="resultMessage">Congratulations, You Won!</h1>
            <button style={{backgroundColor: "blue"}}><Link to="/battle" style={{textDecoration: "none", color: "white"}}>Play Again</Link></button>
        </div>
    
  )
}

export default BattleWin;