
function NavBar({ currentUser, setCurrentUser }) {


    function handleClick() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null)
    }

    return( 
        <ul className="navbar">
            <li id="nav-logo"><a>Spartan Rivalries</a></li>
            <li>
                <button onClick={handleClick}>Logout</button>
            </li>
            <li> Hello, {currentUser.username}!</li>
            <li><a>My Favorites</a></li>
            <li><a>Rivals</a></li>
            
        </ul>
    )
}

export default NavBar