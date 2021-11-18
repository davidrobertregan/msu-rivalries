import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import CommentContainer from "./CommentContainer"
import Fade from "react-bootstrap/Fade"

function GameCard( { game, setViewGame, favorites, addFavorite, deleteFavorite, currentUser, addCommentToGame, deleteCommentFromGame }) {

    let favorite = favorites.filter(f => f.game_id === game.id)[0]
    let favId = favorite ? favorite.id : null
    let userFavs = favorites.filter(f => f.owner === currentUser.username)

    const [showMessage, setShowMessage] = useState(false)
    useEffect(() => setShowMessage(favorite ? true : false), [game])

    const { winner, loser, score, location, date } = game

    function favCheck() {
        let matches = userFavs.filter(f => f.game_id === game.id)
        return matches.length > 0
    }

    function createFavFetch() {
        let newFav = {
            game_id: game.id
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFav)
        }
        fetch("/favorites", configObj)
        .then(r => {
            if(r.ok) {
                r.json().then(fav => addFavorite(fav), setShowMessage(true))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }

    function deleteFavFetch() {
        if (window.confirm("Are you sure you want to unfavorite? This action cannot be undone")){
            deleteFavorite(favorite.id)
            fetch(`/favorites/${favorite.id}`, {method: "DELETE" })
            setShowMessage(false)
        } else {
            console.log('whew! that was close.')
        }
    }

    function handleFavoriteClick() {
        favCheck() ? deleteFavFetch() : createFavFetch()
    }

    const favButtonText = favCheck() ? "⭐️" : "☆"

    return(
        <Fade in appear={true} unmountOnExit={true}> 
        <Container>
            <Card>
                <Card.Header className="d-flex justify-content-end">
                    {date}
                </Card.Header>
                <div className="d-flex justify-content-center">
                    <Card.Img  style={{maxWidth: "300px"}} className="p-5" src={winner.logo_url}>
                    </Card.Img>
                </div>
                <Card.Text>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <b>{winner.name}</b>
                        </Col>
                        <Col>
                            <div className="d-flex flex-column">
                                <h5 className="align-self-center">{score}</h5>
                                <p className="align-self-center">{location}</p>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            {loser.name}
                        </Col>
                    </Row>
                </Card.Text>
                <Container className="border-top p-4">
                    <Row>
                        <Col className="d-flex justify-content-start"><Button variant="light" onClick={() => setViewGame(false)}>Back</Button></Col>
                        <Col className="d-flex justify-content-center"><a href="#comment-form"><Button variant="light">Comment</Button></a></Col>
                        <Col className="d-flex justify-content-end"><Button variant="light" onClick={handleFavoriteClick}>{favButtonText}</Button></Col>
                    </Row>
                </Container>
                <Card.Text>
                <Fade in={showMessage}>
                    <div className="d-flex justify-content-center">
                        <p><em>This game is in your favorites! Customize it <Link to={`/favorite/${favId}`}>here</Link></em></p>
                    </div>
                </Fade>
                </Card.Text>
            </Card>
            
            <CommentContainer 
                game={game} 
                deleteCommentFromGame={deleteCommentFromGame} 
                addCommentToGame={addCommentToGame} 
                currentUser={currentUser}/>

        </Container>
        </Fade>
    )
}

// test for branch

export default GameCard