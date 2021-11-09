import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function NavBar({ currentUser, setCurrentUser, rivalries }) {

    const [rivalriesClass, setRivalriesClass] = useState("submenu")
    const [accountClass, setAccountClass] = useState("submenu")

    function handleClick() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null)
    }

    function handleRivalriesClick() {
        rivalriesClass === "submenu" ? setRivalriesClass("submenu-active") : setRivalriesClass("submenu")
    }

    function handleAccountClick() {
        accountClass === "submenu" ? setAccountClass("submenu-active") : setAccountClass("submenu")
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
                <li className="item has-submenu"  onClick={handleRivalriesClick}>
                    <a tabIndex="0">Rivalries</a>
                    <ul className={rivalriesClass}>
                        {rivalriesListItems}
                    </ul>
                </li>
                <li className="item"><a><NavLink to="/favorites">My Favorites</NavLink></a></li>
                <li className="item has-submenu" onClick={handleAccountClick}>
                    <a tabIndex="0">{currentUser.username}</a>
                    <ul className={accountClass}>
                        <li><a><NavLink className="subitem" to={`/${currentUser.username}`}>My Account</NavLink></a></li>
                        <li><a className="subitem" onClick={handleClick}>Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        // <NavLink to="rivalry">Rivals</NavLink>
    )
}

export default NavBar