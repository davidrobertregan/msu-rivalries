import { useState } from "react"
import Login from './Login'
import Signup from "./Signup"

function UnauthenticatedApp({ setCurrentUser, currentUser}) {

const [viewSignUp, setViewSignUp] = useState(false)

console.log(viewSignUp)

    return (
        <div>
            <div>
                { 
                !viewSignUp ? 
                    <>
                    <Login setCurrentUser={setCurrentUser}/>
                    <p onClick={() => setViewSignUp(true)}>sign up</p>
                    </>
                :
                    <Signup setCurrentUser={setCurrentUser}/> 
                }
            </div>

            <div>

            </div>
        </div>
    )
}

export default UnauthenticatedApp