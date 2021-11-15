import FavoriteCard from "./FavoriteCard"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'

function FavoritesContainer( { favorites } ) {

    let favCards = favorites.map(f => 
        <FavoriteCard 
            favorite={f}
            />)

    return (
        <Container style={{paddingTop: "125px"}}>
            {favCards}
        </Container>  
    )
}

export default FavoritesContainer
