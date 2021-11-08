import GameList from "./GameList"
import FavoriteCard from "./FavoriteCard"
import { useState } from 'react'

function FavoritesContainer( { favorites, deleteFavorite } ) {
    const [viewGame, setViewGame] = useState(false)
    const [game, setGame] = useState(null)

    let games = favorites.map(f => f.game)

    function handleGameClick(e) {
        let value = e.target.value
        let featGame = games.filter(g => g.id === value)
        setGame(featGame)
        setViewGame(true)
    }

    // function editFavorite(fav) {
    //     let favorite = currentFavorites.filter(f => f.id === fav.id)[0]
    //     favorite.description = fav.description

    //     let favsArr = currentFavorites.filter(f => f.id !== fav.id)

    //     favsArr = [...favsArr, favorites]
    // }

    return (
        <div>
            <GameList games={games} handleGameClick={handleGameClick}/>

            {viewGame ?
                <div>
                    <FavoriteCard setViewGame={setViewGame} game={game} favorites={favorites} deleteFavorite={deleteFavorite}/>
                </div>
            :
                <></>
            }
        </div>
    )
}

export default FavoritesContainer