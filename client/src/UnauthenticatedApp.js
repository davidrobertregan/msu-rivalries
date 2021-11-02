import { useState } from "react"
import Login from './Login'
import Signup from "./Signup"

function UnauthenticatedApp() {

const [viewSignUp, setViewSignUp] = useState(false)

console.log(viewSignUp)

    return (
        <div>
            <div>
                { 
                !viewSignUp ? 
                    <>
                    <Login />
                    <p onClick={() => setViewSignUp(true)}>sign up</p>
                    </>
                :
                    <Signup /> 
                }
            </div>

            <div>

            </div>
        </div>
    )
}

export default UnauthenticatedApp