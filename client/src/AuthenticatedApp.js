import NavBar from './NavBar'
import Body from './Body'
import { useEffect, useState } from 'react'

function AuthenticatedApp( {currentUser, setCurrentUser } ) {

    const [rivalries, setRivalries] = useState([])

    
    useEffect(() => {
        fetch("/api/rivalries")
        .then(r => {
            if (r.ok) {
                r.json().then(rivalries => setRivalries(rivalries))
            } else {
                r.json().then(errors => console.log(errors))
            }
        })
    }, [])

    return (
        <div>
            <div>
                <NavBar 
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    rivalries={rivalries}
                />
            </div>
            <div>
                <Body
                    currentUser={currentUser}
                    rivalries={rivalries}
                />
            </div>
        </div>
    )
}

export default AuthenticatedApp