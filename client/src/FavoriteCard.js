import { useHistory, Link } from "react-router-dom"
import { useState, useEffect } from 'react'

function FavoriteCard( {favorite, deleteFavorite, editFavorite }) {

    const history = useHistory()

    return(
        <div className="game-card">
            <Link to={`/favorite/${favorite.id}`}>To Details</Link>
            <h1>{favorite.game.winning_team} won {favorite.game.score}</h1>
            <h5>Rivalry: {favorite.game.rivalry_name}</h5>
            <p>{favorite.game.location}</p>
            <img style={{maxWidth: "300px"}}src={favorite.img_url} alt="upload a picture for your favorite"></img>
            <p><b>Your favorite moment preview...</b> {favorite.favorite_moment}</p>
        </div>
    )
}

export default FavoriteCard