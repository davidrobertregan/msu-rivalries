import { useEffect, useState } from "react"
import GameList from "./GameList"
import GameCard from "./GameCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function RivalryContainer( { rivalry, games, favorites, addFavorite, deleteFavorite, currentUser, addCommentToGame, deleteCommentFromGame } ) {

    const [viewGame, setViewGame] = useState(false)
    const [game, setGame] = useState(null) 

    function handleGameClick(e) {
        let value = e.target.value
        let featGame = games.filter(g => g.id === value)
        setGame(featGame)
        setViewGame(true)
    }

    const filteredGames = games.filter(g => g.rivalry_name === rivalry.name)
    return (
        <Container style={{paddingTop: "125px"}}>
            <Row>
                <Col>
                <GameList 
                    games={filteredGames} 
                    handleGameClick={handleGameClick}/>  
                </Col>
        {!viewGame ?
            <Col className="rivalry-card">
            <h1>{rivalry.name}</h1>
            <h3>{rivalry.record}</h3>
            <img style={{maxWidth: "300px"}}src={rivalry.trophy_img_url}></img>
            <h4>{rivalry.trophy}</h4>
            <div>
                <h4>Backstory:</h4>
                <p>{rivalry.description}</p>
            </div>
            </Col>
        :
            <Col>
                <GameCard 
                    game={game} 
                    setViewGame={setViewGame} 
                    favorites={favorites} 
                    addFavorite={addFavorite} 
                    deleteFavorite={deleteFavorite} 
                    currentUser={currentUser} 
                    addCommentToGame={addCommentToGame} 
                    deleteCommentFromGame={deleteCommentFromGame}
                />
            </Col>
        }
            </Row>
        </Container>
    )
}

export default RivalryContainer