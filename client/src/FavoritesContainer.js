import GameList from "./GameList"
import GameCard from "./GameCard"
import { useState } from 'react'

function FavoritesContainer( { favorites } ) {
    const [viewGame, setViewGame] = useState(false)
    const [game, setGame] = useState(null)

    let games = favorites.map(f => f.game)

    function handleGameClick(e) {
        let value = e.target.value
        let featGame = games.filter(g => g.id === value)
        setGame(featGame)
        setViewGame(true)
    }

    console.log(viewGame)
    
    return (
        <div>
            <GameList games={games} handleGameClick={handleGameClick}/>

            {viewGame ?
                <div>
                    <GameCard setViewGame={setViewGame} game={game} favorites={favorites}/>
                </div>
            :
                <></>
            }
        </div>
    )
}

export default FavoritesContainer