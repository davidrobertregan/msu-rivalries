import Container from 'react-bootstrap/Container'
import FavoritesContainer from './FavoritesContainer'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import Stadium from "./spartan-stadium.jpeg"
import Duckett from "./tj-duckett.jpeg"
import Jalen from "./jalen-watts-jackson.jpeg"

function About( { favorites }) {

    return (
    <>
    <Container fluid="lg" style={{paddingTop: "125px"}}>
        <Row>
            <h1>
                Welcome to Spartan Rivalries
            </h1>
            <p><em>Relive your favorite MSU moments...</em></p>
        </Row>
        
        <Carousel>
            <Carousel.Item>
                <img
                    style={{height: "400px", objectFit: "cover"}}
                    className="d-block w-100"
                    src={Jalen}
                    alt="First slide"
                />
                <Carousel.Caption style={{textShadow: "2px 2px black"}}>
                <h2><em>Explore the history</em></h2>
                <p>See the results to every single game and comment on your most memorable games.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                    style={{height: "400px", objectFit: "cover", objectPosition: "0 10%"}}
                    className="d-block w-100"
                    src={Duckett}
                    alt="First slide"
                />
                <Carousel.Caption style={{textShadow: "2px 2px black"}}>
                <h2><em>Add games to your favorites</em></h2>
                <p>Star your most loved games and add them to your collection</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                    style={{height: "400px", objectFit: "cover"}}
                    className="d-block w-100"
                    src={Stadium}
                    alt="First slide"
                />
                <Carousel.Caption style={{textShadow: "2px 2px black"}}>
                <h2><em>Customize your favorites</em></h2>
                <p>Record where you were, remember your favorite moment and add a custom picture</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>
    <Container>
        <FavoritesContainer favorites={favorites}/>
    </Container>
    </>
    )
}

export default About