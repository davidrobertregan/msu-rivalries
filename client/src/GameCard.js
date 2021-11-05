import { useHistory } from "react-router-dom"

function GameCard( {game, setViewGame, favorites}) {

    let favorite = favorites.filter(f => f.game.id === game[0].id)[0]
    let userFavs = favorites.map(f => f.game)

    function favCheck() {
        let matches = userFavs.filter(g => g.id === game[0].id)
        return matches.length > 0
    }

    function findFavId(){

    }

    const history = useHistory()
    const {winning_team, score, location, rivalry_name} = game[0]

    function createFavFetch() {
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

    function deleteFavFetch() {
        fetch(`/favorites/${favorite.id}`, {method: "DELETE" })
    }

    function handleFavoriteClick() {
        favCheck() ? deleteFavFetch() : createFavFetch()
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