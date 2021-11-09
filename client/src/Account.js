import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { useState } from 'react'

function Account({ currentUser, setCurrentUser }) {

    // what do we want to do here? delete account would be good and easy. An edit info... see recent activity would be dope! What if you could delete or edit actions from here? That's be cool too... stretch perhaps. We shoudl add a user avatar too. Extra note.

    const [viewEditForm, setViewEditForm] = useState(false)

    function handleDelete(){
        if (window.confirm('Are you sure you want to delete your account?')) {
            fetch(`/users/${currentUser.id}`, {method: "DELETE"})
            setCurrentUser(null)
        } else {
            console.log("whew that was close")
        }
    }

    let comments = currentUser.comments.map(c => <p><b>{c.time}: </b>{c.author} commented: "{c.content}"</p>)

    return (
        <Container style={{paddingTop: "120px"}}>
            <h1>
                Hello, {currentUser.username}
            </h1>
            <p><b>Email:</b> {currentUser.email}</p>
            <Button onClick={() => setViewEditForm(!viewEditForm)}>Edit your account</Button>
            {
                viewEditForm ? 
                    <div>
                        <form>
                            <label>Username</label>
                            <input type="text"></input>
                            <label>Email</label>
                            <input type="text"></input>
                        </form>
                        <Button variant="danger" onClick={handleDelete}>Delete your account</Button>
                    </div>
            : 
                    <div>
                    <h2>Recent Activity</h2>
                        {comments}
                    </div>
            }
        </Container>
    )
}

export default Account