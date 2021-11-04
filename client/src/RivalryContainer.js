import { useEffect, useState } from "react"

function RivalryContainer( { rivalry } ) {

    const [games, setGames] = useState([])
    const [game, setGame] = useState({})
    const [viewGame, setViewGame] = useState(false)

// remember the sushis? we probably only want to show the most recent 10 games... 
// also, does it make sense for the fetch to live here? maybe we could add games in the index and pass down rivalry from initial fetch 

    useEffect(() => {
        console.log("fetching... add loading here")
        fetch(`/rivalries/${rivalry.id}`)
        .then(r => {
            if (r.ok) {
                r.json().then(r => {
                    setGames(r.games.reverse())
                    setGame(r.games[0])
                })
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [rivalry])

    console.log(game)

    const gameList = games.map(g => <li key={g.id} id={g.id}>{g.date} - {g.winning_team} - {g.score}</li>)

    return (
        <div>
            <div className="game-list">
                {gameList}
            </div>

            <div className="rivalry-card">
                <h1>{rivalry.name}</h1>
                <h3>Overall series record</h3>
                <img style={{maxWidth: "300px"}}src={rivalry.trophy_img_url}></img>
                <h4>{rivalry.trophy}</h4>
                <div>
                    <h4>Backstory:</h4>
                    <p>{rivalry.description}</p>
                </div>
            </div>

            <div className="game-card">
                <h1>{game.winning_team}</h1>
                <h2>{game.score}</h2>
                <p>{game.location}</p>

            </div>
        </div>
    )
}

export default RivalryContainer