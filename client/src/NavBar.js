
function NavBar({ currentUser, setCurrentUser }) {


    function handleClick() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null)
    }

    return( 
        <div>
            <p>Hello, {currentUser.username}!</p>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default NavBar