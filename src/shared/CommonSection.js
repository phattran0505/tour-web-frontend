import { Container,Col,Row} from 'reactstrap'

import "./CommonSection.css"
function CommonSection({title}) {
    return ( <section className='common-section'>
        <Container>
            <Row>
                <Col lg="12">
                    <h1>{title}</h1> 
                </Col>
            </Row>
        </Container>
    </section> );
}

export default CommonSection;