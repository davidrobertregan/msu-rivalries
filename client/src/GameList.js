
function GameList({games, handleGameClick}) {

    const gameList = games.map(g => <li onClick={handleGameClick} key={g.id} value={g.id}>{g.date} - {g.winning_team} - {g.score}</li>)


    return(
        <div>
            {gameList}
        </div>
    )
}

export default GameList