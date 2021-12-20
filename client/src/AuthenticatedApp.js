import { Route, Switch } from 'react-router'
import { useState, useEffect } from 'react'
import About from './components/About'
import RivalryContainer from './components//RivalryContainer'
import FavoritesContainer from './components//FavoritesContainer'
import FavoriteDetails from './components//FavoriteDetails'
import Account from './components//Account'
import Header from './components//Header'

function AuthenticatedApp( { currentUser,  setCurrentUser }) {

    const [rivalries, setRivalries] = useState([])
    const [games, setGames] = useState([])
    const [favorites, setFavorites] = useState([])
    const [userFavs, setUserFavs] = useState(currentUser.favorites)
    
    const getRivalries = () => {
        fetch("/rivalries")
        .then(r => {
            if (r.ok) {
                r.json().then(rivalries => setRivalries(rivalries))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }
    const getGames = () => {
        fetch("/games")
        .then(r => {
            if (r.ok) {
                r.json().then(games => setGames(games))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }
    const getFavs = () => {
        fetch("/favorites")
        .then(r => {
            if (r.ok) {
                r.json().then(favorites => setFavorites(favorites.reverse()))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }

    useEffect(getRivalries, [])

    useEffect(getGames, [])

    useEffect(getFavs, [])

    const addFavorite = (fav) => {
        let newUserFavs = [fav, ...userFavs]
        setUserFavs(newUserFavs)
        let newFavs = [fav, ...favorites,]
        setFavorites(newFavs)

    }

    const deleteFavorite = (id) => {
        let newUserFavs = userFavs.filter(f => f.id !== id)
        setUserFavs(newUserFavs)
        let newFavs = favorites.filter(f => f.id !== id)
        setFavorites(newFavs)
    }

    const addCommentToGame = (comment) => {
        let game = games.filter(g => g.id === comment.game_id)[0]
        let gamesArr = games.filter(g => g.id !== comment.game_id)
        game.comments = [...game.comments, comment]
        gamesArr = [...gamesArr, game]
        setGames(gamesArr)
    }

    const deleteCommentFromGame = (comment) => {
        let game = games.filter(g => g.id === comment.game_id)[0]
        let gamesArr = games.filter(g => g.id !== comment.game_id)
        game.comments = game.comments.filter(c => c.id !== comment.id)
        gamesArr = [...gamesArr, game]
        gamesArr.sort((a, b) => a.date - b.date)
        setGames(gamesArr)
    }

    const editFavorite = (favorite) => {
        let newUserFavs = userFavs.map(f => {
            if(f.id === favorite.id){
                return favorite
            } else {
                return f
            }
        })
        setUserFavs(newUserFavs)
        
        let newFavsArr = favorites.map(f => {
            if(f.id === favorite.id){
                return favorite
            } else {
                return f
            }
        })
        setFavorites(newFavsArr)
    }
    
    const rivalryRoutes = rivalries.map(r => 
        <Route 
            key={r.id} 
            path={`/rivalry/${r.name}`}>
                <RivalryContainer 
                    rivalry={r} 
                    games={games} 
                    userFavs={userFavs} 
                    addFavorite={addFavorite} 
                    deleteFavorite={deleteFavorite} 
                    currentUser={currentUser} 
                    addCommentToGame={addCommentToGame} 
                    deleteCommentFromGame={deleteCommentFromGame}/>
        </Route>)

    return(
        <>
        <Header 
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    rivalries={rivalries}
                />
        <Switch>
            <Route exact path="/">
                <About 
                    favorites={favorites}/>
            </Route>
                {rivalryRoutes}
            <Route path="/my-favorites">
                <FavoritesContainer 
                    favorites={userFavs}/>
            </Route>
            <Route exact path="/favorite/:id">
                <FavoriteDetails 
                    editFavorite={editFavorite} 
                    deleteFavorite={deleteFavorite}/>
            </Route>
            <Route path={`/${currentUser.username}`}>
                <Account 
                    currentUser={currentUser} 
                    setCurrentUser={setCurrentUser} 
                    userFavs={userFavs}/>
            </Route>
        </Switch>
        </>
    )
}

export default AuthenticatedApp