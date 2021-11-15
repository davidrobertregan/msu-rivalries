import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function FavoriteCard( { favorite }) {

    return(
        <Container className="p-3">
            <Card style={{ maxWidth: '25rem'}} className="mx-auto">
                <Card.Header>
                    <b>{favorite.owner}</b>
                </Card.Header>
                <Card.Body>
                <Card.Title>
                    {favorite.nickname ? <h2><em>"{favorite.nickname}"</em></h2> : <></>}
                </Card.Title>
                <Link to={`/favorite/${favorite.id}`}>
                    <Card.Img src={favorite.img_url}></Card.Img>
                </Link>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><h6>{favorite.winning_team} over {favorite.losing_team}</h6></ListGroup.Item>
                    <ListGroup.Item><p>{favorite.game_date}</p></ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Text>
                            {favorite.preview ? <p><em>"{favorite.preview}"</em></p> : <></>}
                        </Card.Text>
                    </ListGroup.Item>
                </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default FavoriteCard