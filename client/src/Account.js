import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Form from "react-bootstrap/Form"


function Account({ currentUser, setCurrentUser, userFavs }) {

    let history = useHistory()
    
    const [viewEditForm, setViewEditForm] = useState(false)
    const [errors, setErrors] = useState(null)
    const [formData, setFormData] = useState({ username: currentUser.username, email: currentUser.email })
    
    let comments = currentUser.comments.length > 0 ? currentUser.comments.map(c => <p key={c.id}><b>{c.time}: </b>{c.author} commented: "{c.content}"</p>) : <p>No comments yet</p>
    let favoritesList = userFavs.length > 0 ? userFavs.map(f => 
        <div key={f.id}>
            <Link to={`/favorite/${f.id}`}>
                <h5>{f.nickname}</h5>
            </Link>
            <p>Preview: "{f.preview}"</p>
        </div>) : <p>No favorites yet</p>
        
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
                    <Button onClick={() => setViewEditForm(!viewEditForm)}>Edit account</Button>
                </Col>
            {
                viewEditForm ? 
                <Container className='w-75 p-5'>
                        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3"> 
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={handleChange} name="username" value={formData.username} type="text"></Form.Control>
                        </Form.Group>   
                        <Form.Group className="mb-3">  
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={handleChange} name="email" value={formData.email} type="text"></Form.Control>
                        </Form.Group>
                        <div>
                            <Button type='submit'>Submit</Button>
                            <Button style={{float: "right"}}variant="danger" onClick={handleDelete}>Delete account</Button>
                        </div>
                        </Form>
                        {errors ? 
                            <div>
                                {errors.errors.map(e => <p style={{color: 'red'}}>{e}</p>)}
                            </div>    
                            :
                            <></>
                        }
                    </Container>
            : 
            <Container className="p-5">
                <Row>
                    <Col>
                        <h3><em>Your comments</em></h3>
                            {comments}
                    </Col>
                    <Col>
                        <h3><em>Your favorites</em></h3>
                            {favoritesList}
                    </Col>
                </Row>
            </Container>
            }
            </Row>
        </Container>
    )
}

export default Account


// what do we want to do here? delete account would be good and easy. An edit info... see recent activity would be dope! What if you could delete or edit actions from here? That's be cool too... stretch perhaps. We shoudl add a user avatar too. Extra note.