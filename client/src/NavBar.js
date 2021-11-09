import { NavLink } from 'react-router-dom'

function NavBar({ currentUser, setCurrentUser, rivalries }) {


    function handleClick() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null)
    }

    const rivalriesListItems = rivalries.map(r => 
        <li key={r.id}>
            <a>
                <NavLink 
                    className="subitem" 
                    to={`/rivalries/${r.name}`}>
                        {r.name}
                </NavLink>
            </a>
        </li>)

    return( 
        <nav>
            <ul className="menu"> 
                <li className="logo"><a><NavLink to="/about">Spartan Rivalries</NavLink></a></li>
                <li className="item has-submenu">
                    <a tabIndex="0">Rivalries</a>
                    <ul className="submenu">
                        {rivalriesListItems}
                    </ul>
                </li>
                <li className="item"><a><NavLink to="/favorites">My Favorites</NavLink></a></li>
                <li className="item has-submenu">
                    <a tabIndex="0">{currentUser.username}</a>
                    <ul className="submenu">
                        <li className="subitem"><a><NavLink to={`/${currentUser.username}`}>My Account</NavLink></a></li>
                        <li className="subitem"><a><button onClick={handleClick}>Logout</button></a></li>
                    </ul>
                </li>
                <li class="toggle"><a><i className="fas fa-bars"></i></a></li>
            </ul>
        </nav>

        // <NavLink to="rivalry">Rivals</NavLink>
    )
}

export default NavBar