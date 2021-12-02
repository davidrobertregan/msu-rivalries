import { useState, useEffect } from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"
import Col from 'react-bootstrap/Col'


function GameList({games, handleGameClick}) {

// right now I'm sorting games by id to prevent adding/deleteing a comment to change the order. in order to propery sort games by date, we'll need to change the datatype to a date rather than a string. I jsut had an issue with the csv.each method skipping some games with this format. 
const [gamesLoading, setGamesLoading] = useState(true)

useEffect(() => setGamesLoading(games.length === 0 ? true : false), [games])

games.sort((a, b) => b.id - a.id )


    // const gameList = games.map(g => 
    //     <li 
    //         onClick={handleGameClick} 
    //         key={g.id} 
    //         value={g.id}>
    //         {g.date} - {g.winner.name} - {g.score}
    //     </li>)


    const gameListItems = games.map(g =>
        <ListGroup.Item
            action href={`#game${g.id}`}>
            <li
            style={{listStyle: "none"}} 
            onClick={handleGameClick} 
            key={g.id} 
            value={g.id}
            >
            {g.date.slice(g.date.length - 4)} - {g.winner.name}
            </li>
        </ListGroup.Item>
        )

        const gameTabList = games.map(g => 
            <Tab.Pane eventKey={`#game${g.id}`}>
            
            </Tab.Pane>
            )

    return(
        <div>
            <h2>Series History</h2>
            {gamesLoading ? <p>Games loading...</p> : 
            <>
            <Col sm={8} style={{maxHeight: "500px", maxWidth: "300px", overflow: "scroll"}}>
                <Tab.Container>
                    <ListGroup>
                        {gameListItems}
                    </ListGroup>
                </Tab.Container>
            </Col>
            <Col sm={8}>
            <Tab.Content>
                {gameTabList}
            </Tab.Content>
            </Col>
            </>
            
            }
        </div>
    )
}

export default GameList