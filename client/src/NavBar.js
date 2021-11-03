import { NavLink } from 'react-router-dom'

function NavBar({ currentUser, setCurrentUser }) {


    function handleClick() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null)
    }

    return( 
        // <nav>
        //     <ul className="navbar">
        //         <li className="logo"><NavLink to="/about">Spartan Rivalries</NavLink></li>
        //         <li className="item">
        //             <button onClick={handleClick}>Logout</button>
        //         </li>
        //         <li className="item"><NavLink to={`/${currentUser.username}`}> Hello, {currentUser.username}!</NavLink></li>
        //         <li className="item"><NavLink to="/favorites">My Favorites</NavLink></li>
        //         <li className="item"><NavLink to="rivalry">Rivals</NavLink></li>  
        //     </ul>
        // </nav>

        <nav>
            <ul className="menu">
                <li className="logo"><NavLink to="/about">Spartan Rivalries</NavLink></li>
                <li className="item"><NavLink to="/favorites">My Favorites</NavLink></li>
                <li className="item"><NavLink to="rivalry">Rivals</NavLink></li>
                <li className="item has-subitem">
                    <a tabindex="0">{currentUser.username}</a>
                    <ul class="submenu">
                        <li class="subitem"><NavLink to={`/${currentUser.username}`}>My Account</NavLink></li>
                        <li class="subitem"><button onClick={handleClick}>Logout</button></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar