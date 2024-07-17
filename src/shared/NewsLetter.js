import { Container, Col, Row } from "reactstrap";

import MaleTourist from "./../assets/images/male-tourist.png";

import "./NewsLetter.css";
function NewsLetter() {
  return (
    <section className="newsletter-section">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter-content">
              <h2>Subcirbe now to get useful travelling information.</h2>
              <div className="newsletter-input">
                <input type="email" placeholder="Enter your email"></input>
                <button className="subcribe-btn">Subcirbe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter-img">
              <img src={MaleTourist} alt="no-img"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NewsLetter;
