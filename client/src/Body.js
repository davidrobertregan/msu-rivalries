import { Route, Switch } from 'react-router'
import About from './About'
import RivalryContainer from './RivalryContainer'
import FavoritesContainer from './FavoritesContainer'
import Account from './Account'
import { useState, useEffect } from 'react'

function Body( { currentUser, rivalries, games, favorites }) {

    // refactor note: could I move this state and function to Rivalry Container?
    const [game, setGame] = useState(games[0]) 

    const rivalryRoutes = rivalries.map(r => <Route key={r.id} path={`/rivalries/${r.name}`}><RivalryContainer rivalry={r} games={games} game={game} onGameClick={onGameClick}/></Route>)

    function onGameClick(e){
        let value = e.target.value
        let featGame = games.filter(g => g.id === value)
        setGame(featGame)
    }

    return(
        <Switch>
            <Route path="/about">
                <About />
            </Route>
                {rivalryRoutes}
            <Route path="/favorites">
                <FavoritesContainer favorites={favorites}/>
            </Route>
            <Route path={`/${currentUser.username}`}>
                <Account />
            </Route>
        </Switch>
    )
}

export default Body