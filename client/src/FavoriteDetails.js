import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FavoriteDetails() {

    const id = useParams().id

    const [favorite, setFavorite] = useState({})

    useEffect(() => {
        fetch(`/favorites/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then(fav => setFavorite(fav))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [id])

    console.log(favorite)

    return(
        <div style={{paddingTop: '200px'}}>
            <p>{favorite.game.score}</p>
        </div>
    )
}

export default FavoriteDetails