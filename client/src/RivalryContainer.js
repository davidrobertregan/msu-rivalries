import { useEffect, useState } from "react"
import GameList from "./GameList"
import GameCard from "./GameCard"

function RivalryContainer( { rivalry, games, onGameClick, game} ) {

    const [viewGame, setViewGame] = useState(false)

    function handleGameClick(e) {
        onGameClick(e)
        setViewGame(true)
    }

    console.log(game)

    const filteredGames = games.filter(g => g.rivalry_name === rivalry.name)
    return (
        <div>
            <div className="game-list">
                <GameList filteredGames={filteredGames} handleGameClick={handleGameClick}/>  
            </div>
            {!viewGame ?
                <div className="rivalry-card">
                <h1>{rivalry.name}</h1>
                <h3>Overall series record (ruby method)</h3>
                <img style={{maxWidth: "300px"}}src={rivalry.trophy_img_url}></img>
                <h4>{rivalry.trophy}</h4>
                    <div>
                        <h4>Backstory:</h4>
                        <p>{rivalry.description}</p>
                    </div>
                </div>
            :
                <GameCard game={game} setViewGame={setViewGame}/>
            }
        </div>
    )
}

export default RivalryContainer