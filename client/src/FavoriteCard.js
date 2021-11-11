import { useHistory, Link } from "react-router-dom"
import { useState, useEffect } from 'react'

function FavoriteCard( {favorite, deleteFavorite, editFavorite }) {

    // let favorite = favorites.filter(f => f.game.id === game[0].id)[0]
    // let userFavs = favorites.map(f => f.game)

    // const [description, setDescription] = useState(favorite.description ? favorite.description : "")
    
    const [formData, setFormData] = useState({
        location: favorite.location ? favorite.location : "",
        favorite_moment: favorite.favorite_moment ? favorite.favorite_moment : "",
        img_url: favorite.img_url ? favorite.img_url : ""
    })
    const [viewForm, setViewForm] = useState(false)

    // function favCheck() {
    //     let matches = userFavs.filter(g => g.id === game[0].id)
    //     return matches.length > 0
    // }

    const history = useHistory()

    function deleteFavFetch() {
        deleteFavorite(favorite.id)
        fetch(`/favorites/${favorite.id}`, {method: "DELETE" })
    }

    function handleFavoriteClick() {
        deleteFavFetch()
    }

    function handleChange(e) {
        let key = e.target.name
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(`/favorites/${favorite.id}`, configObj)
        .then(r => {
            if (r.ok) {
                r.json().then(fav => editFavorite(fav))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
        setViewForm(false)
    }

    // const favButtonText = favCheck() ? "🗑" : "⭐️"

    return(
        <>
{/*  Refactor op: put game card below and pass down another level */}
        <div className="game-card">
            <Link to={`/favorite/${favorite.id}`}>To Details</Link>
            <h1>{favorite.game.winning_team} won {favorite.game.score}</h1>
            <h5>Rivalry: {favorite.game.rivalry_name}</h5>
            <p>{favorite.game.location}</p>
            <img style={{maxWidth: "300px"}}src={formData.img_url} alt="upload a picture for your favorite"></img>
            <p><b>Where you were:</b> {formData.location}</p>
            <p><b>Your favorite moment:</b> {formData.favorite_moment}</p>
            <button onClick={() => {setViewForm(true)}}>edit</button>
            <button onClick={handleFavoriteClick}>Trash</button>
        </div>

        {viewForm ?

        <form onSubmit={handleSubmit}>
            <label>Where were you?</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange}></input>
            <label>Favorite moment?</label>
            <input type="text" name="favorite_moment" value={formData.favorite_moment} onChange={handleChange}></input>
            <label>Upload a personal picture from the game!</label>
            <input type="text" name="img_url" value={formData.img_url} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>

        :
        <></>

        }

        </>
    )
}

export default FavoriteCard