import { useEffect, useState } from "react"

function RivalryContainer( { rivalry } ) {

    const [games, setGames] = useState([])

// remember the sushis? we probably only want to show the most recent 10 games... 

    useEffect(() => {
        console.log("fetching... add loading here")
        fetch(`/rivalries/${rivalry.id}`)
        .then(r => {
            if (r.ok) {
                r.json().then(r => setGames(r.games.reverse()))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [rivalry])

    console.log(games)

    const gameList = games.map(g => <li>{g.date} - {g.winning_team} - {g.score}</li>)

    return (
        <div>
            <h3>
                I am the {rivalry.name} Container...
            </h3>
            <div>
                {gameList}
            </div>
        </div>
    )
}

export default RivalryContainer