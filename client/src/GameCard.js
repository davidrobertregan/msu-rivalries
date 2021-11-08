import { useState } from "react"
import { useHistory } from "react-router-dom"

function GameCard( {game, setViewGame, favorites, addFavorite, deleteFavorite}) {

    let favorite = favorites.filter(f => f.game.id === game[0].id)[0]
    let userFavs = favorites.map(f => f.game)

    const comments = game[0].comments.map(c => <p key={c.id}>{c.author}: {c.content}</p>)

    const [newComment, setNewComment] = useState("")

    function favCheck() {
        let matches = userFavs.filter(g => g.id === game[0].id)
        return matches.length > 0
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
        .then(r => {
            if(r.ok) {
                r.json().then(fav => addFavorite(fav))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }

    function deleteFavFetch() {
        deleteFavorite(favorite.id)
        fetch(`/favorites/${favorite.id}`, {method: "DELETE" })
    }

    function handleFavoriteClick() {
        favCheck() ? deleteFavFetch() : createFavFetch()
    }

    const favButtonText = favCheck() ? "unfavorite" : "favorite"

    function handleChange(e) {
        setNewComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const body = {
            game_id: game[0].id,
            content: newComment
        }

        const configObj = {
            method: "POST",
            headers: {
                "CONTENT-TYPE": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch("/comments", configObj)
        .then(r => {
            if(r.ok) {
                r.json().then(comment => console.log(comment))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }

    return(
        <div className="game-card">
            <h1>{winning_team}</h1>
            <h2>{score}</h2>
            <p>{location}</p>
            <button onClick={handleFavoriteClick}>{favButtonText}</button>
            <button onClick={() => setViewGame(false)}>Okay, I'm done</button>
            <div className="comment-div">
                <h2>Comments</h2>
                    {comments}
                <form onSubmit={handleSubmit}>
                    <label>CurrentUser:</label>
                    <input type="text" value={newComment} onChange={handleChange} placeholder="add a comment"></input>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    )
}

export default GameCard