import { Route, Switch } from 'react-router'
import About from './About'
import RivalryContainer from './RivalryContainer'
import FavoritesContainer from './FavoritesContainer'
import Account from './Account'
import { useState, useEffect } from 'react'

function Body( { currentUser, rivalries, games, favorites }) {

    const rivalryRoutes = rivalries.map(r => <Route key={r.id} path={`/rivalries/${r.name}`}><RivalryContainer rivalry={r} games={games} favorites={favorites}/></Route>)

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