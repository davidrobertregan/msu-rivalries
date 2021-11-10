import { Route, Switch } from 'react-router'
import About from './About'
import RivalryContainer from './RivalryContainer'
import FavoritesContainer from './FavoritesContainer'
import Account from './Account'

function Body( { currentUser, rivalries, games, favorites, addFavorite, deleteFavorite, addCommentToGame, deleteCommentFromGame, editFavorite, setCurrentUser }) {


    const rivalryRoutes = rivalries.map(r => 
        <Route 
            key={r.id} 
            path={`/rivalries/${r.name}`}>
                <RivalryContainer 
                    rivalry={r} games={games} 
                    favorites={favorites} 
                    addFavorite={addFavorite} 
                    deleteFavorite={deleteFavorite} 
                    currentUser={currentUser} 
                    addCommentToGame={addCommentToGame} 
                    deleteCommentFromGame={deleteCommentFromGame}/>
        </Route>)

    return(
        <Switch>
            <Route exact path="/">
                <About />
            </Route>
                {rivalryRoutes}
            <Route path="/favorites">
                <FavoritesContainer 
                    favorites={favorites} 
                    deleteFavorite={deleteFavorite} 
                    editFavorite={editFavorite}/>
            </Route>
            <Route path={`/${currentUser.username}`}>
                <Account currentUser={currentUser} setCurrentUser={setCurrentUser} favorites={favorites}/>
            </Route>
        </Switch>
    )
}

export default Body