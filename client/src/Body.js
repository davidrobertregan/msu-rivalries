import { Route, Switch } from 'react-router'
import About from './About'
import RivalryContainer from './RivalryContainer'
import FavoritesContainer from './FavoritesContainer'
import Account from './Account'

function Body( { currentUser, rivalries, games }) {

    const rivalryRoutes = rivalries.map(r => <Route key={r.id} path={`/rivalries/${r.name}`}><RivalryContainer rivalry={r} games={games}/></Route>)

    return(
        <Switch>
            <Route path="/about">
                <About />
            </Route>
                {rivalryRoutes}
            <Route path="/favorites">
                <FavoritesContainer />
            </Route>
            <Route path={`/${currentUser.username}`}>
                <Account />
            </Route>
        </Switch>
    )
}

export default Body