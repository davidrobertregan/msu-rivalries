import GameList from "./GameList"
import FavoriteCard from "./FavoriteCard"
import { useState } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function FavoritesContainer( { favorites, deleteFavorite, editFavorite } ) {
    const [viewGame, setViewGame] = useState(false)
    const [game, setGame] = useState(null)

    let games = favorites.map(f => f.game)

    function handleGameClick(e) {
        let value = e.target.value
        let featGame = games.filter(g => g.id === value)
        setGame(featGame)
        setViewGame(true)
    }

    return (
        <Container style={{paddingTop: "125px"}}>
            <Row>
                <Col>
                    <GameList 
                        games={games} 
                        handleGameClick={handleGameClick}
                    />
                </Col>

            {viewGame ?
                <Col>
                    <FavoriteCard 
                        setViewGame={setViewGame} 
                        game={game} 
                        favorites={favorites} 
                        deleteFavorite={deleteFavorite} 
                        editFavorite={editFavorite}
                    />
                </Col>
            :
                <></>
            }
            </Row>
        </Container>
    )
}

export default FavoritesContainer