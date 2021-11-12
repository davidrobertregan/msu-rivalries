import FavoriteCard from "./FavoriteCard"
import Container from "react-bootstrap/Container"

function FavoritesContainer( { userFavs } ) {

    let favCards = userFavs.map(f => 
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
