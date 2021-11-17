import { Route, Switch } from 'react-router'
import About from './About'
import RivalryContainer from './RivalryContainer'
import FavoritesContainer from './FavoritesContainer'
import FavoriteDetails from './FavoriteDetails'
import Account from './Account'

function Body( { currentUser, rivalries, games, favorites, addFavorite, deleteFavorite, addCommentToGame, deleteCommentFromGame, editFavorite, setCurrentUser, userFavs }) {

    const rivalryRoutes = rivalries.map(r => 
        <Route 
            key={r.id} 
            path={`/rivalries/${r.name}`}>
                <RivalryContainer 
                    rivalry={r} games={games} 
                    userFavs={userFavs} 
                    addFavorite={addFavorite} 
                    deleteFavorite={deleteFavorite} 
                    currentUser={currentUser} 
                    addCommentToGame={addCommentToGame} 
                    deleteCommentFromGame={deleteCommentFromGame}/>
        </Route>)

    return(
        <Switch>
            <Route exact path="/">
                <About 
                    favorites={favorites}/>
            </Route>
                {rivalryRoutes}
            <Route path="/favorites">
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
    )
}

export default Body