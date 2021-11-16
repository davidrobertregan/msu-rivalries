import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function GameCard( { game, setViewGame, favorites, addFavorite, deleteFavorite, currentUser, addCommentToGame, deleteCommentFromGame }) {

    let favorite = favorites.filter(f => f.game_id === game[0].id)[0]
    let favId = favorite ? favorite.id : null
    let userFavs = favorites.filter(f => f.owner === currentUser.username)

    const [showMessage, setShowMessage] = useState(false)
    useEffect(() => setShowMessage(favorite ? true : false), [game])

    const comments = game[0].comments

    const commentDivs = comments.map(c => 
        <Container className="p-2" key={c.id}>
            <Row className="bg-light border rounded">
                <Col>
            <h6>{c.author}:</h6>
            <p>{c.content}</p>
            </Col>
            <Col>
            {c.user_can_modify ?
                <Button variant="light" value={c.id} onClick={handleDeleteCommentClick}>🗑</Button> 
            :
                <></>
            }
            </Col>
            </Row>
        </Container>
        )

    const [newComment, setNewComment] = useState("")

    function favCheck() {
        let matches = userFavs.filter(f => f.game_id === game[0].id)
        return matches.length > 0
    }

    const { winner, loser, score, location, date } = game[0]

    function createFavFetch() {
        let newFav = {
            game_id: game[0].id
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

    function handleDeleteCommentClick(e){
        fetch(`/comments/${e.target.value}`, {method: "DELETE"})
        .then(r => {
            if(r.ok) {
                r.json().then(comment => deleteCommentFromGame(comment))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }

    const favButtonText = favCheck() ? "⭐️" : "☆"

    function handleChange(e) {
        setNewComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const body = {
            game_id: game[0].id,
            content: newComment
        }

        const configObj = {
            method: "POST",
            headers: {
                "CONTENT-TYPE": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch("/comments", configObj)
        .then(r => {
            if(r.ok) {
                r.json().then(comment => addCommentToGame(comment))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
        setNewComment("")
    }

    return(
        <div className="game-card">
            <h1>{winner.name}</h1>
            <h2>{score}</h2>
            <img src={winner.logo_url} style={{maxWidth: "250px"}}></img>
            <p>{date}</p>
            <p>{location}</p>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center"><Button variant="light" onClick={() => setViewGame(false)}>Back</Button></Col>
                    <Col className="d-flex justify-content-center"><a href="#comment-form"><Button variant="light">Comment</Button></a></Col>
                    <Col className="d-flex justify-content-center"><Button variant="light" onClick={handleFavoriteClick}>{favButtonText}</Button></Col>
                </Row>
            </Container>
            {showMessage ?
            <div>
                <p><em>This game is in your favorites! Customize it <Link to={`/favorite/${favId}`}>here</Link></em></p>
            </div>
            :
            <></>
}

{/* comments needs to be its own component */}
            <Container className="border-top pt-3">
                    {commentDivs}
                {/* <form onSubmit={handleSubmit}>
                    <label><b>{currentUser.username}:</b></label>
                    <input type="text" value={newComment} onChange={handleChange} placeholder="add a comment"></input>
                    <input type="submit"></input>
                </form> */}
                <Form id="comment-form" className="pt-5 pb-5" onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Label><h5>{currentUser.username}</h5></Form.Label>
                        </Col>
                        <Col xs={6}>
                            <Form.Control type="text" value={newComment} onChange={handleChange} placeholder="add a comment"/>
                        </Col>
                        <Col className="d-flex justify-content-end">
                        <Button variant="light" type="submit">✅</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default GameCard