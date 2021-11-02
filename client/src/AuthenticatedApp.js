import NavBar from './NavBar'
import Body from './Body'

function AuthenticatedApp( {currentUser, setCurrentUser } ) {
    return (
        <div>
            <div>
                <NavBar 
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                />
            </div>
            <div>
                <Body
                    currentUser={currentUser}
                />
            </div>
        </div>
    )
}

export default AuthenticatedApp