import Header from './Header'
import Body from './Body'
import { useEffect, useState } from 'react'

function AuthenticatedApp( { currentUser, setCurrentUser } ) {

    const [rivalries, setRivalries] = useState([])
    const [games, setGames] = useState([])
    const [favorites, setFavorites] = useState([])
    
    useEffect(() => {
        console.log("fetching rivalries...")
        fetch("/rivalries")
        .then(r => {
            if (r.ok) {
                r.json().then(rivalries => setRivalries(rivalries))
                console.log("done fetching rivalries...")
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [])

    useEffect(() => {
        console.log("fetching games...")
        fetch("/games")
        .then(r => {
            if (r.ok) {
                r.json().then(games => setGames(games))
                console.log("done fetching games...")
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [])

    useEffect(() => {
        console.log("fetching favorites...")
        fetch("/favorites")
        .then(r => {
            if (r.ok) {
                r.json().then(favorites => setFavorites(favorites))
                console.log("done fetching favorites...")
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

    return (
        <div>
            <div>
                <Header 
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    rivalries={rivalries}
                />
            </div>
            <div>
                <Body
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
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