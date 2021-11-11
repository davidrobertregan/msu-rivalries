import GameList from "./GameList"
import FavoriteCard from "./FavoriteCard"
import { useState } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function FavoritesContainer( { favorites, deleteFavorite, editFavorite } ) {

    console.log(favorites)

    let favCards = favorites.map(f => 
        <FavoriteCard 
            favorite={f}
            editFavorite={editFavorite}
            deleteFavorite={deleteFavorite}/>)

    return (
        <Container style={{paddingTop: "125px"}}>
            {favCards}
        </Container>  
    )
}

export default FavoritesContainer
