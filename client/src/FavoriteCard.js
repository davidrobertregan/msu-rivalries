import { Link } from "react-router-dom"

function FavoriteCard( { favorite }) {

    return(
        <div className="game-card">
            <h1 style={{color: "green"}}>{favorite.owner}</h1>
            <h2><em>"{favorite.nickname}"</em></h2>
            <h4>{favorite.winning_team} over {favorite.losing_team}</h4>
            <h5>{favorite.game_date}</h5>
            <img style={{maxWidth: "300px"}}src={favorite.img_url} alt="upload a picture for your favorite"></img>
            <p><em>"{favorite.preview}"</em></p>
            <Link to={`/favorite/${favorite.id}`}>Details</Link>
        </div>
    )
}

export default FavoriteCard