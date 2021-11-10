import { NavLink, useHistory } from 'react-router-dom'
import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


function Header ({ currentUser, setCurrentUser, rivalries }) {

    function handleClick() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null)
        history.push('/')
    }

    let history = useHistory()

    const rivalryNavLinks = rivalries.map(r => 
                <NavDropdown.Item key={r.id}>
                    <NavLink 
                        to={`/rivalries/${r.name}`}>
                            {r.name}
                    </NavLink>
                </NavDropdown.Item>
                )

    return( 
        <Navbar fixed="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Spartan Rivalries</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="Rivalries" id="basic-nav-dropdown">
                        {rivalryNavLinks}
                    </NavDropdown>
                    <Nav.Link>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to={`/${currentUser.username}`}>{currentUser.username}</NavLink>
                    </Nav.Link>
                    <Nav.Link onClick={handleClick}>
                        Logout
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header