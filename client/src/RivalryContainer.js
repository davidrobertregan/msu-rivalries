import { useEffect, useState } from "react"
import GameList from "./GameList"
import GameCard from "./GameCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

function RivalryContainer( { rivalry, games, userFavs, addFavorite, deleteFavorite, currentUser, addCommentToGame, deleteCommentFromGame } ) {

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
            // <Col className="rivalry-card">
            // <h1>{rivalry.name}</h1>
            // <h3>{rivalry.record}</h3>
            // <img style={{maxWidth: "300px"}}src={rivalry.trophy_img_url}></img>
            // <h4>{rivalry.trophy}</h4>
            // <div>
            //     <h4>Backstory:</h4>
            //     <p>{rivalry.description}</p>
            // </div>
            // </Col>
            <Col>
                <Card>
                    <Card.Body>
                    <Card.Title className='d-flex justify-content-center'>
                        {rivalry.name} - Michigan State
                    </Card.Title>
                    <Card.Subtitle className='d-flex justify-content-center'>
                        {rivalry.record}
                    </Card.Subtitle>
                    <div className='d-flex justify-content-center'>
                        <Card.Img style={{maxWidth: "300px", height: "300px", objectFit: "contain"}} src={rivalry.trophy_img_url}>
                        </Card.Img>
                    </div>
                    <Card.Title className='d-flex justify-content-center'>
                        {rivalry.trophy}
                    </Card.Title>
                    <Card.Text className='d-flex justify-content-center'>
                        {rivalry.description}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        :
            <Col>
                <GameCard 
                    game={game} 
                    setViewGame={setViewGame} 
                    favorites={userFavs} 
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