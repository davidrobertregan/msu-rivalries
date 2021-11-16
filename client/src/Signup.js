import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Signup({setCurrentUser, setErrors}) {

    const [formData, setFormData ] = useState({ username: '', email:'', password: '', password_confirmation: '' })

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

        fetch("/signup", configObj)
        .then(r => {
            if(r.ok) {
                r.json()
                .then(user => setCurrentUser(user))
                setFormData({username: '', email: '', password:'', password_confirmation: ''})
                history.push("/")
            } else {
                r.json()
                .then(errors => setErrors(errors.errors))
            }
        })
    }

    return(
        <Container>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}> 
                <Form.Group className="mb-3"> 
                    <Form.Label>Username</Form.Label>
                    <Form.Control  type="text" name="username" value={formData.username} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Button variant='light' type='submit'>Submit</Button>
            </Form>
            <Link to="/" onClick={() => setErrors(null)}>I already have an account</Link>
        </Container>

    )
}

export default Signup