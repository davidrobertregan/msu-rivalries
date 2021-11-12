import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


function Account({ currentUser, setCurrentUser, userFavs }) {

    let history = useHistory()
    
    const [viewEditForm, setViewEditForm] = useState(false)
    const [errors, setErrors] = useState(null)
    const [formData, setFormData] = useState({ username: currentUser.username, email: currentUser.email })
    
    let comments = currentUser.comments.map(c => <p key={c.id}><b>{c.time}: </b>{c.author} commented: "{c.content}"</p>)
    let favoritesList = userFavs.map(f => 
        <div key={f.id}>
            <h5>{f.winning_team} beat {f.losing_team} on {f.game_date}</h5>
            <p>Favorite Moment: "{f.favorite_moment}"</p>
        </div>)
        
    function handleDelete(){
        if (window.confirm('Are you sure you want to delete your account?')) {
            fetch(`/users/${currentUser.id}`, {method: "DELETE"})
            setCurrentUser(null)
            history.push("/")
        } else {
            console.log("whew that was close")
        }
    }
    
    function handleChange(e) {
        let key = e.target.name
        
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        
        const configObj ={
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        
        fetch(`/users/{currentUser.id}`, configObj)
        .then(r => {
            if(r.ok) {
                r.json().then(user => {
                    setCurrentUser(user);
                    history.push(`/${user.username}`)
                })
                setViewEditForm(false)
            } else {
                r.json().then(errors => setErrors(errors))
            }
        })
    }
    
    return (
        <Container style={{paddingTop: "120px"}}>
            <Row>
                <Col sm={8}>
                    <h1>
                        Hello, {currentUser.username}
                    </h1>
                    <p><b>Email:</b> {currentUser.email}</p>
                </Col>
                <Col sm={3}>
                    <Button onClick={() => setViewEditForm(!viewEditForm)}>Edit your account</Button>
                </Col>
            {
                viewEditForm ? 
                <div>
                        <form onSubmit={handleSubmit}>
                            <label>Username</label>
                            <input onChange={handleChange} name="username" value={formData.username} type="text"></input>
                            <label>Email</label>
                            <input onChange={handleChange} name="email" value={formData.email} type="text"></input>
                            <input type='submit'></input>
                        </form>
                        {errors ? 
                            <div>
                                {errors.errors.map(e => <p style={{color: 'red'}}>{e}</p>)}
                            </div>    
                            :
                            <></>
                        }
                        <Button variant="danger" onClick={handleDelete}>Delete your account</Button>
                    </div>
            : 
            <div>
                    <h3><em>Your recent activity</em></h3>
                        {comments}
                    <h3><em>Your favorites</em></h3>
                        {favoritesList}
                    </div>
            }
            </Row>
        </Container>
    )
}

export default Account


// what do we want to do here? delete account would be good and easy. An edit info... see recent activity would be dope! What if you could delete or edit actions from here? That's be cool too... stretch perhaps. We shoudl add a user avatar too. Extra note.