import NavBar from './NavBar'
import Body from './Body'
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"

function AuthenticatedApp( {currentUser, setCurrentUser } ) {

    const [rivalries, setRivalries] = useState([])
    const [games, setGames] = useState([])
    const [favorites, setFavorites] = useState([])

    let history = useHistory()
    
    useEffect(() => {
        fetch("/rivalries")
        .then(r => {
            if (r.ok) {
                r.json().then(rivalries => setRivalries(rivalries))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [])

    useEffect(() => {
        fetch("/games")
        .then(r => {
            if (r.ok) {
                r.json().then(games => setGames(games))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [])

    useEffect(() => {
        fetch("/favorites")
        .then(r => {
            if (r.ok) {
                r.json().then(favorites => setFavorites(favorites))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [])

    function addFavorite(fav){
        let newFavorites = [...favorites, fav]
        setFavorites(newFavorites)
    }

    function deleteFavorite(id) {
        let newFavorites = favorites.filter(f => f.id !== id)
        setFavorites(newFavorites)
    }

    

    return (
        <div>
            <div>
                <NavBar 
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    rivalries={rivalries}
                />
            </div>
            <div>
                <Body
                    currentUser={currentUser}
                    rivalries={rivalries}
                    games={games}
                    favorites={favorites}
                    addFavorite={addFavorite}
                    deleteFavorite={deleteFavorite}
                />
            </div>
        </div>
    )
}

export default AuthenticatedApp