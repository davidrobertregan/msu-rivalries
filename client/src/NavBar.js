import { NavLink } from 'react-router-dom'

function NavBar({ currentUser, setCurrentUser, rivalries }) {


    function handleClick() {
        fetch("api/logout", { method: "DELETE" })
        setCurrentUser(null)
    }

    const rivalriesListItems = rivalries.map(r => <li key={r.id}><NavLink to={`/rivalries/${r.name}`}>{r.name}</NavLink></li>)

    return( 
        <nav>
            <ul className="menu">
                <li className="logo"><NavLink to="/about">Spartan Rivalries</NavLink></li>
                <li className="item has-subitem">
                    <a tabIndex="0">Rivalries</a>
                    <ul>
                        {rivalriesListItems}
                    </ul>
                </li>
                <li className="item"><NavLink to="/favorites">My Favorites</NavLink></li>
                <li className="item has-subitem">
                    <a tabIndex="0">{currentUser.username}</a>
                    <ul className="submenu">
                        <li className="subitem"><NavLink to={`/${currentUser.username}`}>My Account</NavLink></li>
                        <li className="subitem"><button onClick={handleClick}>Logout</button></li>
                    </ul>
                </li>
            </ul>
        </nav>

        // <NavLink to="rivalry">Rivals</NavLink>
    )
}

export default NavBar