import { useState } from "react"
import { Route} from "react-router"
import { useHistory, Switch, Link } from 'react-router-dom'
import Login from './Login'
import Signup from "./Signup"

function UnauthenticatedApp({ setCurrentUser, currentUser}) {

const [viewSignUp, setViewSignUp] = useState(false)
const [errors, setErrors] = useState(null)

let errorsList = errors ? errors.map(e => <li key={e} className="errors">{e}</li>) : <></>

let history = useHistory()

console.log(viewSignUp)

    return (
        <div>
            <Switch>
                <Route path="/login">
                    <Login setCurrentUser={setCurrentUser} setErrors={setErrors}/>
                    <Link to="/signup" onClick={() => setErrors(null)}>sign up</Link>
                </Route>
                <Route path="/signup">
                    <Signup setCurrentUser={setCurrentUser} setErrors={setErrors}/> 
                    <Link to="/login" onClick={() => setErrors(null)}>I already have an account</Link>
                </Route>
            </Switch>
            <div>
                {errorsList}
            </div>
        </div>
    )
}

export default UnauthenticatedApp