import { useEffect, useState } from "react"

function RivalryContainer( { rivalry, games } ) {

    const filteredGames = games.filter(g => g.rivalry_name === rivalry.name)
    const gameList = filteredGames.map(g => <li key={g.id} id={g.id} onClick={handleGameClick}>{g.date} - {g.winning_team} - {g.score}</li>)

    return (
        <div>
            <div className="game-list">
                {gameList}
            </div>

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

            {/* <div className="game-card">
                <h1>{game.winning_team}</h1>
                <h2>{game.score}</h2>
                <p>{game.location}</p>

            </div> */}
        </div>
    )
}

export default RivalryContainer