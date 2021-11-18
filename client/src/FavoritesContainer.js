import FavoriteCard from "./FavoriteCard"
import Container from "react-bootstrap/Container"
function FavoritesContainer( { favorites } ) {

    let favCards = favorites.map(f => 
        <FavoriteCard 
            favorite={f}
            />)

    return (
        <>
        <Container style={{paddingTop: "100px"}} className="d-flex justify-content-center">
            <h1>Favorites</h1>
        </Container>
        <Container className="d-flex flex-row flex-wrap justify-content-center">
            {favCards}
        </Container>  
        </>
    )
}

export default FavoritesContainer
