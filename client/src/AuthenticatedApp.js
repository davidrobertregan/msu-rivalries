import NavBar from './NavBar'

function AuthenticatedApp( {currentUser, setCurrentUser } ) {
    return (
        <NavBar 
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
        />
    )
}

export default AuthenticatedApp