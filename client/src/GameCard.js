
function GameCard( {game}) {

const {winning_team, score, location} = game[0]

    return(
        <div className="game-card">
        <h1>{winning_team}</h1>
        <h2>{score}</h2>
        <p>{location}</p>
    </div>
    )
}

export default GameCard