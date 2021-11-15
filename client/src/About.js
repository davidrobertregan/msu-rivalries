import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import Gruff from './MSU-Gruff-Sparty-Throwback-Sticker.webp'

function About() {

    return (

    <Container style={{paddingTop: "125px", maxWidth: "750px"}}>
        {/* <Row>
            <h2>
                Welcome to Spartan Rivalries
            </h2>
            <p><em>Relive your favorite MSU moments...</em></p>
        </Row> */}
        
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://sportshub.cbsistatic.com/i/r/2018/07/06/41fc4a29-d57b-4fac-8968-eb7739f06509/thumbnail/1200x675/0349f1767374a198c162401c44d590cc/usatsi-8866786-220956-lowres.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                <h2><em>Explore the history...</em></h2>
                <p>See the results to every single game in the 'Rivalries' tab and comment on your most memorable games.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                    className="d-block w-100"
                    src="https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/kzgazette/sports_impact/photo/24114849-standard.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3><em>Add games to your favorites...</em></h3>
                <p>Star your most loved games and add them to your collection</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                    className="d-block w-100"
                    src="https://www.mlive.com/resizer/xo3SFqBogHSfRdiWiuNFqDCTrqw=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/wolverines_impact/photo/devingardnerummsuhitjpg-78b03497fb4fec22.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3><em>Customize your favorites...</em></h3>
                <p>Record where you were, remember your favorite moment and add a custom picture</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>
    )
}

export default About