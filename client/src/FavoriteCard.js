import { Link } from "react-router-dom"

function FavoriteCard( { favorite }) {

    return(
        <div className="game-card">
            <h1 style={{color: "green"}}>{favorite.owner}</h1>
            <h3>{favorite.winning_team} beat {favorite.losing_team}</h3>
            <h5>{favorite.game_date}</h5>
            <img style={{maxWidth: "300px"}}src={favorite.img_url} alt="upload a picture for your favorite"></img>
            <p><b>{favorite.owner}:</b>"{favorite.favorite_moment}"</p>
            <Link to={`/favorite/${favorite.id}`}>Details</Link>
        </div>
    )
}

export default FavoriteCard