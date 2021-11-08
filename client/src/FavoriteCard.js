import { useHistory } from "react-router-dom"
import { useState, useEffect } from 'react'

function FavoriteCard( {game, setViewGame, favorites, addFavorite, deleteFavorite}) {

    let favorite = favorites.filter(f => f.game.id === game[0].id)[0]
    let userFavs = favorites.map(f => f.game)

    const [description, setDescription] = useState(favorite.description ? favorite.description : "")
    const [viewForm, setViewForm] = useState(false)

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
        setViewGame(false)
        fetch(`/favorites/${favorite.id}`, {method: "DELETE" })
    }

    function handleFavoriteClick() {
        favCheck() ? deleteFavFetch() : createFavFetch()
    }

    function handleChange(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const body = { description: description }

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }

        fetch(`/favorites/${favorite.id}`, configObj)
        .then(r => {
            if (r.ok) {
                r.json().then(fav => console.log(fav))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
        setViewForm(false)
    }

    const favButtonText = favCheck() ? "unfavorite" : "favorite"

    return(
        <>
{/*  Refactor op: put game card below and pass down another level */}
        <div className="game-card">
            <h1>Favorite Card</h1>
            <h1>{winning_team}</h1>
            <h2>{score}</h2>
            <p>{location}</p>
            <p>Description: {favorite.description}</p>
            <button onClick={() => {setViewForm(true)}}>edit</button>
            <button onClick={handleFavoriteClick}>{favButtonText}</button>
            <button onClick={() => setViewGame(false)}>Okay, I'm done</button>
        </div>

        {viewForm ?

        <form onSubmit={handleSubmit}>
            <label>Edit description</label>
            <input type="text" value={description} onChange={handleChange}></input>
            <input type="submit"></input>
            <p>ie. Where were you? Favorite moment?</p>
        </form>

        :
        <></>

        }

        </>
    )
}

export default FavoriteCard