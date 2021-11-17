import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function FavoriteCard( { favorite }) {

    return(
        <div>
        <Card style={{maxWidth: "20em", margin: "10px"}}>
            <Card.Header>
                <b>{favorite.owner}</b>
            </Card.Header>
            <Card.Body>
            <Link to={`/favorite/${favorite.id}`}>
                <div className="d-flex justify-content-center">
                <Card.Img style={{width: "250px", height: "250px", objectFit: "cover"}} src={favorite.img_url}></Card.Img>
                </div>
            </Link>
            <ListGroup className="list-group-flush">
                <Card.Title className="d-flex justify-content-center">
                    {favorite.nickname ? <em>"{favorite.nickname}"</em> : <></>}
                </Card.Title>
                <ListGroup.Item><p>{favorite.game_date}</p></ListGroup.Item>
                <ListGroup.Item>
                    <Card.Text>
                        {favorite.preview ? <p><em>"{favorite.preview}"</em></p> : <></>}
                    </Card.Text>
                </ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
        </div>
    )
}

export default FavoriteCard