import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import Gruff from './MSU-Gruff-Sparty-Throwback-Sticker.webp'

function About() {

    return (

    <Container style={{paddingTop: "125px"}}>
        {/* <Row>
            <h2>
                Welcome to Spartan Rivalries
            </h2>
            <p><em>Relive your favorite MSU moments...</em></p>
        </Row> */}
        
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Gruff}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h2><em>Explore the history...</em></h2>
                <p>See the results to every single game in the 'Rivalries' tab and comment on your most memorable games.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Container className='p-5'>
                <h3><em>Add games to your favorites...</em></h3>
                <p>Star your most loved games and add them to your collection</p>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className='p-5'>
                <h3><em>Customize your favorites...</em></h3>
                <p>Record where you were, remember your favorite moment and add a custom picture</p>
                </Container>
            </Carousel.Item>
        </Carousel>
    </Container>
    )
}

export default About