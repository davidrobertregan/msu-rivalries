import { useState } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function CommentContainer( { game, deleteCommentFromGame, addCommentToGame, currentUser }) {

    const [newComment, setNewComment] = useState("")

    const comments = game.comments
    
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
    
    function handleChange(e) {
        setNewComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const body = {
            game_id: game.id,
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

    return(
        <Container className="border-top pt-3">
                    {commentDivs}
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
    )
}

export default CommentContainer