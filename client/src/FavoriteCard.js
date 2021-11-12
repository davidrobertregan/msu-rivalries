import { Link } from "react-router-dom"

function FavoriteCard( { favorite }) {

    return(
        <div className="game-card">
            <Link to={`/favorite/${favorite.id}`}>To Details</Link>
            <h1>{favorite.winning_team} beat {favorite.losing_team}</h1>
            <h5>{favorite.game_date}</h5>
            <img style={{maxWidth: "300px"}}src={favorite.img_url} alt="upload a picture for your favorite"></img>
            <p><b>{favorite.owner}:</b>"{favorite.favorite_moment}"</p>
        </div>
    )
}

export default FavoriteCard