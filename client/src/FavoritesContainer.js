import GameList from "./GameList"

function FavoritesContainer( { favorites } ) {
    
    console.log(favorites)

    let games = favorites.map(f => f.game)

    console.log(games)
    
    return (
        <div>
            <GameList games={games}/>
        </div>
    )
}

export default FavoritesContainer