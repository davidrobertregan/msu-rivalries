import { useState } from "react"

function UnauthenticatedApp() {

const [viewSignUp, setViewSignUp] = useState(false)

console.log(viewSignUp)

    return (
        <div>
            <div>
                { !viewSignUp ? 
                <form className="userform">
                    <label>Username</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <input type="submit"></input>
                    <p onClick={() => setViewSignUp(true)}>sign up</p>
                </form>
                :
                <form className="userform">
                    <label>Username</label>
                    <input type="text"></input>
                    <label>Email</label>
                    <input type="email"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <label>Password confirmation</label>
                    <input type="password"></input>
                    <input type="submit"></input>
                </form> }
            </div>

            <div>

            </div>
        </div>
    )
}

export default UnauthenticatedApp