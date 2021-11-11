import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FavoriteDetails() {

    const id = useParams().id

    const [favorite, setFavorite] = useState({})
    const [game, setGame] = useState({})

    useEffect(() => {
        fetch(`/favorites/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then(fav => {
                    setFavorite(fav) 
                    setGame(fav.game)})
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [id])

    console.log(favorite)

    return(
        <div style={{paddingTop: '200px'}}>
            <img style={{maxWidth: "400px"}}src={favorite.img_url}></img>
            <p>{favorite.location}</p>
            <p>{game.winning_team}</p>
        </div>
    )
}

export default FavoriteDetails