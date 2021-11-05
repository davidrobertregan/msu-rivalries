import { useHistory } from "react-router-dom"

function GameCard( {game, setViewGame, favorites={favorites}}) {

    function favCheck() {
        let userFavs = favorites.map(f => f.game)
        let matches = userFavs.filter(g => g.id === game[0].id)
        return matches.length > 0
    }

    console.log(favCheck())

    const history = useHistory()
    const {winning_team, score, location, rivalry_name} = game[0]

    function favoriteGameFetch() {
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

    function handleFavoriteClick() {
        favCheck() ? console.log('deleteFavFetch!') : favoriteGameFetch()
    }

    const favButtonText = favCheck() ? "unfavorite" : "favorite"

    return(
        <div className="game-card">
            <h1>{winning_team}</h1>
            <h2>{score}</h2>
            <p>{location}</p>
            <button onClick={handleFavoriteClick}>{favButtonText}</button>
            <button onClick={() => setViewGame(false)}>Back Rivalry Info</button>
        </div>
    )
}

export default GameCard