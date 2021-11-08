
function GameList({games, handleGameClick}) {

// right now I'm sorting games by id to prevent adding/deleteing a comment to change the order. in order to propery sort games by date, we'll need to change the datatype to a date rather than a string. I jsut had an issue with the csv.each method skipping some games with this format. 

games.sort((a, b) => b.id - a.id )

    const gameList = games.map(g => <li onClick={handleGameClick} key={g.id} value={g.id}>{g.date} - {g.winning_team} - {g.score}</li>)

    return(
        <div>
            {gameList}
        </div>
    )
}

export default GameList