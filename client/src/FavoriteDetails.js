import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"

function FavoriteDetails({ editFavorite, deleteFavorite }) {

    const id = useParams().id
    const history = useHistory()

    const [favorite, setFavorite] = useState({})
    const [game, setGame] = useState({})
    const [viewForm, setViewForm] = useState(false)

    const [formData, setFormData] = useState({
        nickname: favorite.nickname,
        location: favorite.location,
        favorite_moment: favorite.favorite_moment,
        img_url: favorite.img_url
    })

    useEffect(() => {
        fetch(`/favorites/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then(fav => {
                    setFavorite(fav) 
                    setGame(fav.game)
                    setFormData({
                        nickname: fav.nickname,
                        location: fav.location,
                        favorite_moment: fav.favorite_moment,
                        img_url: fav.img_url
                    })})
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [id])

    function handleChange(e) {
        let key = e.target.name
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(`/favorites/${favorite.id}`, configObj)
        .then(r => {
            if (r.ok) {
                r.json().then(fav => editFavorite(fav))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
        setViewForm(false)
    }

    console.log(favorite)

    function handleDelete() {
        if (window.confirm("Are you sure? This action cannot be undone")){ 
            deleteFavorite(favorite.id)
            history.push('/favorites')
            fetch(`/favorites/${favorite.id}`, {method: "DELETE" })
        } else {
            console.log("whew! that was close")
        }
    }

    console.log(game)

    return(
        <Container style={{paddingTop: "100px"}}>
                    <Card style={{ maxWidth: '50rem'}} className="mx-auto">
                        <Card.Header>
                            <Row>
                                <Col>
                                    <h4>{favorite.owner}</h4>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <div>
                                        <h5>{game.date}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Link to={`/favorite/${favorite.id}`}>
                                        <Card.Img src={formData.img_url}></Card.Img>
                                    </Link>
                                    </Col>
                                    <Col>
                                        <Card.Title className="d-flex justify-content-center">
                                            {favorite.nickname ? <h2><em>"{formData.nickname}"</em></h2> : <></>}
                                        </Card.Title>
                                            <Card.Text className="border rounded">
                                                <Row>
                                                    <Col className="d-flex justify-content-center">
                                                        {game.winning_team}
                                                    </Col>
                                                    <Col>
                                                        <div className="d-flex flex-column">
                                                            <h5 className="align-self-center">{game.score}</h5>
                                                            <p className="align-self-center">{game.location}</p>
                                                        </div>
                                                    </Col>
                                                    <Col className="d-flex justify-content-center">
                                                        {game.losing_team}
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                            { viewForm ?
                                                <Form onSubmit={handleSubmit}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Add a nickname:</Form.Label>
                                                        <Form.Control type="text" name="nickname" value={formData.nickname} onChange={handleChange}></Form.Control>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Where were you?</Form.Label>
                                                        <Form.Control type="text" name="location" value={formData.location} onChange={handleChange}></Form.Control>
                                                    </Form.Group>
                                                    <Form.Group className='mb-3'>
                                                        <Form.Label>Favorite moment?</Form.Label>
                                                        <Form.Control type="text" name="favorite_moment" value={formData.favorite_moment} onChange={handleChange}></Form.Control>
                                                    </Form.Group>
                                                    <Form.Group className='mb-3'>
                                                        <Form.Label>Upload a personal picture from the game!</Form.Label>
                                                        <Form.Control type="text" name="img_url" value={formData.img_url} onChange={handleChange}></Form.Control>
                                                    </Form.Group>
                                                        <Button type="submit">Submit</Button>
                                                        <Button onClick={handleDelete}>Remove</Button>
                                                </Form>
                                            :

                                                <>
                                                    <Card.Title>
                                                    Where {favorite.owner} was:
                                                    </Card.Title>
                                                    <Card.Text>
                                                        {formData.location}
                                                    </Card.Text>
                                                    <Card.Title>
                                                        Favorite Moment:
                                                    </Card.Title>
                                                    <Card.Text>
                                                        {formData.favorite_moment}
                                                    </Card.Text>
                                                </>
                                            }
                                            { favorite.user_can_modify ? 
                                                <div className="d-flex justify-content-end">
                                                    <Button onClick={() => {setViewForm(true)}}>Edit</Button>
                                                </div>
                                            :
                                                <></>
                                            }                 
                                    </Col>      
                            </Row>
                        </Card.Body>
                    </Card>
        </Container>
    )
}

export default FavoriteDetails