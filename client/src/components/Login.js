import { useState } from 'react'
import { useHistory, Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Carousel from "react-bootstrap/Carousel"

function Login({setCurrentUser, setErrors, errorsList}) {

    const [formData, setFormData ] = useState({username: '', password: ''})

    let history = useHistory()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

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
        <Container fluid className="p-5">
            <Row>
                <Col className="p-5">
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
                    <div className="p-4">
                        {errorsList}
                    </div>
                    <Link to="/signup" onClick={() => setErrors(null)}>Sign up for an account</Link>
                </Col>
                <Col sm={8}>
                    <h1>
                        Welcome to Spartan Rivalries
                    </h1>
                    <p><em>Relive your favorite MSU moments...</em></p>
                <Carousel>
                    <Carousel.Item>
                    <img
                            style={{height: "400px", objectFit: "cover"}}
                            className="d-block w-100"
                            src={"https://res.cloudinary.com/do4zijkje/image/upload/v1637165759/upside-down-game-nd-msu-leadjpg_l61qkf.jpg"}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{height: "400px", objectFit: "cover"}}
                            className="d-block w-100"
                            src={"https://res.cloudinary.com/do4zijkje/image/upload/v1637165794/10-19-michigan-01_vojthx.jpg"}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                            style={{height: "400px", objectFit: "cover"}}
                            className="d-block w-100"
                            src={"https://res.cloudinary.com/do4zijkje/image/upload/v1637165921/land-grant-trophyjpg-d29b8cfba5fdced1_zme995.jpg"}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Login