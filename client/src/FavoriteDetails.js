import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

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

    return(
        <div>
            <div style={{paddingTop: '200px'}}>
                <h1>{formData.nickname}</h1>
                <h3>{game.winning_team} won {game.score}</h3>
                <h5>Rivalry: {game.rivalry_name}</h5>
                <img style={{maxWidth: "400px"}}src={formData.img_url}></img>
                <p>{game.location}</p>
                <p>{game.date}</p>
                <p>Where you were: {formData.location}</p>
                <p>Your favorite moment: {formData.favorite_moment}</p>
                <button onClick={() => history.push('/favorites')}>Back</button>

                { favorite.user_can_modify ? 
                    <div>
                        <button onClick={() => {setViewForm(true)}}>Edit</button>
                        <button onClick={handleDelete}>Remove</button>
                    </div>
                :

                <></>
}
            </div>

            { viewForm ?

            <form onSubmit={handleSubmit}>
                <label>Add a nickname:</label>
                <input type="text" name="nickname" value={formData.nickname} onChange={handleChange}></input>
                <label>Where were you?</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange}></input>
                <label>Favorite moment?</label>
                <input type="text" name="favorite_moment" value={formData.favorite_moment} onChange={handleChange}></input>
                <label>Upload a personal picture from the game!</label>
                <input type="text" name="img_url" value={formData.img_url} onChange={handleChange}></input>
                <input type="submit"></input>
            </form>

            :

            <></>

            }
        </div>
    )
}

export default FavoriteDetails