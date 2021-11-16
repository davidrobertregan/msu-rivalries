import { useState } from 'react'
import { useHistory, Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Login({setCurrentUser, setErrors}) {

    const [formData, setFormData ] = useState({username: '', password: ''})

    let history = useHistory()

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch("/login", configObj)
        .then(r => {
            if(r.ok) {
                r.json()
                .then(user => setCurrentUser(user))
                setFormData({username: '', password: ''})
                history.push('/')
            } else {
                r.json()
                .then(errors => setErrors(errors.errors))
            }
        })
    }

    return (
        <Container>
        <h2>Log In</h2>
        <Form onSubmit={handleSubmit}> 
            <Form.Group className="mb-3"> 
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={handleChange} value={formData.username} type="text" name="username"></Form.Control>
            </Form.Group >
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} value={formData.password} type="password" name="password"></Form.Control>
            </Form.Group>
            <Button variant='light' type='submit'>Submit</Button>
        </Form>
        <Link to="/signup" onClick={() => setErrors(null)}>sign up</Link>
        </Container>
    )
}

export default Login