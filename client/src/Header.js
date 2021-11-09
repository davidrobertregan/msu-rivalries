import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


function Header ({ currentUser, setCurrentUser, rivalries }) {

    // const [rivalriesClass, setRivalriesClass] = useState("submenu")
    // const [accountClass, setAccountClass] = useState("submenu")

    function handleClick() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null)
    }

    // function handleRivalriesClick() {
    //     rivalriesClass === "submenu" ? setRivalriesClass("submenu-active") : setRivalriesClass("submenu")
    // }

    // function handleAccountClick() {
    //     accountClass === "submenu" ? setAccountClass("submenu-active") : setAccountClass("submenu")
    // }

    const rivalryNavLinks = rivalries.map(r => 
                <NavDropdown.Item>
                    <NavLink 
                        className="subitem" 
                        to={`/rivalries/${r.name}`}>
                            {r.name}
                    </NavLink>
                </NavDropdown.Item>
                )

    return( 
        <Navbar fixed="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Spartan Rivalries</Navbar.Brand>
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

{/* <nav>
            <ul className="menu"> 
                <li className="logo"><a><NavLink to="/about">Spartan Rivalries</NavLink></a></li>
                <li className="item has-submenu"  onClick={handleRivalriesClick}>
                    <a tabIndex="0">Rivalries</a>
                    <ul className={rivalriesClass}>
                        {rivalriesListItems}
                    </ul>
                </li>
                <li className="item"><a><NavLink to="/favorites">My Favorites</NavLink></a></li>
                <li className="item has-submenu" onClick={handleAccountClick}>
                    <a tabIndex="0">{currentUser.username}</a>
                    <ul className={accountClass}>
                        <li><a><NavLink className="subitem" to={`/${currentUser.username}`}>My Account</NavLink></a></li>
                        <li><a className="subitem" onClick={handleClick}>Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    */}