import { useHistory } from "react-router-dom"

function GameCard( {game, setViewGame}) {

const history = useHistory()

const {winning_team, score, location, rivalry_name} = game[0]

    return(
        <div className="game-card">
        <h1>{winning_team}</h1>
        <h2>{score}</h2>
        <p>{location}</p>
        <button onClick={() => setViewGame(false)}>Back to Rivalry Info</button>
    </div>
    )
}

export default GameCard