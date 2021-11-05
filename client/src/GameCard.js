import { useHistory } from "react-router-dom"

function GameCard( {game, setViewGame}) {

    const history = useHistory()
    const {winning_team, score, location, rivalry_name} = game[0]

    function handleFavoriteClick() {
        let newFav = {
            game_id: game[0].id
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFav)
        }
        fetch("/favorites", configObj)
    }

    return(
        <div className="game-card">
            <h1>{winning_team}</h1>
            <h2>{score}</h2>
            <p>{location}</p>
            <button onClick={handleFavoriteClick}>⭐️</button>
            <button onClick={() => setViewGame(false)}>Back Rivalry Info</button>
        </div>
    )
}

export default GameCard