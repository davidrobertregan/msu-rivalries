import { NavLink } from 'react-router-dom'

function NavBar({ currentUser, setCurrentUser }) {


    function handleClick() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null)
    }

    return( 
        <nav>
            <ul className="navbar">
                <li className="logo"><NavLink to="/about">Spartan Rivalries</NavLink></li>
                <li className="item">
                    <button onClick={handleClick}>Logout</button>
                </li>
                <li className="item"><NavLink to={`/${currentUser.username}`}> Hello, {currentUser.username}!</NavLink></li>
                <li className="item"><NavLink to="/favorites">My Favorites</NavLink></li>
                <li className="item"><NavLink to="rivalry">Rivals</NavLink></li>  
            </ul>
        </nav>
    )
}

export default NavBar