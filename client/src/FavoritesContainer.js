import GameList from "./GameList"
import FavoriteCard from "./FavoriteCard"
import { useState } from 'react'

function FavoritesContainer( { favorites, deleteFavorite } ) {
    const [viewGame, setViewGame] = useState(false)
    const [game, setGame] = useState(null)
    const [currentFavorites, setCurrentFavorites] = useState(favorites)

    let games = favorites.map(f => f.game)

    function handleGameClick(e) {
        let value = e.target.value
        let featGame = games.filter(g => g.id === value)
        setGame(featGame)
        setViewGame(true)
    }

    function editFavorite(fav) {
        let favorite = currentFavorites.filter(f => f.id === fav.id)[0]
        favorite.description = fav.description

        let favsArr = currentFavorites.filter(f => f.id !== fav.id)

        favsArr = [...favsArr, favorite]

        setCurrentFavorites(favsArr)
    }

    return (
        <div>
            <GameList games={games} handleGameClick={handleGameClick}/>

            {viewGame ?
                <div>
                    <FavoriteCard setViewGame={setViewGame} game={game} favorites={currentFavorites} deleteFavorite={deleteFavorite} editFavorite={editFavorite}/>
                </div>
            :
                <></>
            }
        </div>
    )
}

export default FavoritesContainer