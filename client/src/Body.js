import { Route, Switch } from 'react-router'
import About from './About'
import RivalryContainer from './RivalryContainer'
import FavoritesContainer from './FavoritesContainer'
import Account from './Account'

function Body( { currentUser }) {

    return(
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/rivalry">
                <RivalryContainer />
            </Route>
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