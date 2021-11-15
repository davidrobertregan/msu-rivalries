import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function FavoriteCard( { favorite }) {

    return(
        <div>
            <div className="game-card">
                <h1 style={{color: "green"}}>{favorite.owner}</h1>
                {favorite.nickname ? <h2><em>"{favorite.nickname}"</em></h2> : <></>}
                <h4>{favorite.winning_team} over {favorite.losing_team}</h4>
                <h5>{favorite.game_date}</h5>
                <img style={{maxWidth: "300px"}} src={favorite.img_url} alt="upload a picture for your favorite"></img>
                {favorite.preview ? <p><em>"{favorite.preview}"</em></p> : <></>}
                <Link to={`/favorite/${favorite.id}`}>Details</Link>
            </div>

            <Card style={{ maxWidth: '20rem'}}>
                <Card.Header>
                    <b>{favorite.owner}</b>
                </Card.Header>
                <Card.Body>
                <Card.Title>
                    {favorite.nickname ? <h2><em>"{favorite.nickname}"</em></h2> : <></>}
                </Card.Title>
                <Card.Img style={{maxWidth: "300px"}} src={favorite.img_url}></Card.Img>
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
        </div>
    )
}

export default FavoriteCard