import { useState } from "react"
import { Route} from "react-router"
import { Switch, Link } from 'react-router-dom'
import Login from './Login'
import Signup from "./Signup"

function UnauthenticatedApp({ setCurrentUser, currentUser}) {

const [errors, setErrors] = useState(null)

let errorsList = errors ? errors.map(e => <li key={e} className="list-group-item list-group-item-danger">{e}</li>) : <></>

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Login setCurrentUser={setCurrentUser} setErrors={setErrors} errorsList={errorsList}/>
                </Route>
                <Route path="/signup">
                    <Signup setCurrentUser={setCurrentUser} setErrors={setErrors} errorsList={errorsList}/> 
                </Route>
            </Switch>
        </div>
    )
}

export default UnauthenticatedApp