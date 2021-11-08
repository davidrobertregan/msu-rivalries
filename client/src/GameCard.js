import { useState } from "react"
import { useHistory } from "react-router-dom"

function GameCard( { game, setViewGame, favorites, addFavorite, deleteFavorite, currentUser, addCommentToGame, deleteCommentFromGame }) {

    let favorite = favorites.filter(f => f.game.id === game[0].id)[0]
    let userFavs = favorites.map(f => f.game)

    const comments = game[0].comments
    
    const commentDivs = comments.map(c => 
        <div key={c.id}>
            <p>{c.author}: {c.content}</p>
            {c.author === currentUser.username ? 
                <button value={c.id} onClick={handleDeleteCommentClick}>delete</button> 
            :
                <></>
            }
        </div>
        )

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

    function handleDeleteCommentClick(e){
        fetch(`/comments/${e.target.value}`, {method: "DELETE"})
        .then(r => {
            if(r.ok) {
                r.json().then(comment => deleteCommentFromGame(comment))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
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
                r.json().then(comment => addCommentToGame(comment))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
        setNewComment("")
    }

    return(
        <div className="game-card">
            <h1>{winning_team}</h1>
            <h2>{score}</h2>
            <p>{location}</p>
            <button onClick={handleFavoriteClick}>{favButtonText}</button>
            <button onClick={() => setViewGame(false)}>Okay, I'm done</button>
            <div className="comment-div">
                <h2>{winning_team}</h2>
                <h2>Comments</h2>
                    {commentDivs}
                <form onSubmit={handleSubmit}>
                    <label>{currentUser.username}:</label>
                    <input type="text" value={newComment} onChange={handleChange} placeholder="add a comment"></input>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    )
}

export default GameCard