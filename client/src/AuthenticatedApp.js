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

    function addCommentToGame(comment){
        let game = games.filter(g => g.id === comment.game_id)[0]
        let gamesArr = games.filter(g => g.id !== comment.game_id)
        game.comments = [...game.comments, comment]
        gamesArr = [...gamesArr, game]
        // need to make sure these games stay in order by date
        setGames(gamesArr)
    }

    function deleteCommentFromGame(comment) {
        let game = games.filter(g => g.id === comment.game_id)[0]
        let gamesArr = games.filter(g => g.id !== comment.game_id)
        game.comments = game.comments.filter(c => c.id !== comment.id)
        gamesArr = [...gamesArr, game]
        // need to make sure these games stay in order by date
        gamesArr.sort((a, b) => a.date - b.date)

        setGames(gamesArr)
    }

    function editFavorite(favorite) {
        let favsArr =  favorites.filter(f => f.id !== favorite.id)
        favsArr = [...favsArr, favorite]
        setFavorites(favsArr)
    }

    // for the favorite patch... 

    // because we're reusing game card in both rivalry container and favorites container, it may be tricky to condition what we want to display...
    // it may be easier to nearly duplicate the gamecard and call it favoritecard in the favorites container. that should be pretty simply. we'll pretty much pass down the same things, jsut add a little extra stuff... we could actually just display a favorite card under the game card... i think building a new component is th eright move. 
    

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
                    addCommentToGame={addCommentToGame}
                    deleteCommentFromGame={deleteCommentFromGame}
                    editFavorite={editFavorite}
                />
            </div>
        </div>
    )
}

export default AuthenticatedApp