import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function About() {

    return (
    <Container style={{paddingTop: "125px"}}>
        <Row>
            <h2>
                Welcome to Spartan Rivalries
            </h2>
            <p><em>Relive your favorite MSU moments...</em></p>
        </Row>
        <Row>
            <Col>
                <h3><em>Explore the history...</em></h3>
                <p>See the results to every single game in the 'Rivalries' tab and comment on your most memorable games.</p>
            </Col>
            <Col>
                <h3><em>Add games to your favorites...</em></h3>
                <p>Star your most loved games and add them to your collection</p>
            </Col>
            <Col>
                <h3><em>Customize your favorites...</em></h3>
                <p>Record where you were, remember your favorite moment and add a custom picture</p>
            </Col>
        </Row>
    </Container>
    )
}

export default About