import { Container, Col, Row } from "reactstrap";

import heroImg01 from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import worldImg from "../../assets/images/world.png";
import ExperienceImg from "../../assets/images/experience.png"

import SubTitle from "../../shared/SubTitle";
import SearchBar from "../../shared/SearchBar";
import ServiceList from "../../services/ServiceList";
import TourList from "../../components/tourlist/TourList";

import "./Home.css";
import MasonryImage from "../../components/gallery/MasonaryImage";
import FanList from "../../components/fans/FanList";
import NewsLetter from "../../shared/NewsLetter";
function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero-content">
                <div className="hero-subtitle d-flex align-items-center">
                  <SubTitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="no-img"></img>
                </div>
                <h1>
                  Traveling open the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis esse eos dicta impedit cum dignissimos beatae quae
                  nam necessitatibus as periores unde aut perferendis nobis,
                  molestiae, voluptate tempore, molestias quasi sed.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="img-box">
                <img src={heroImg01} alt="no-img"></img>
              </div>
            </Col>
            <Col lg="2">
              <div className="img-box mt-4">
                <video src={heroVideo} alt="no-video" controls loop></video>
              </div>
            </Col>
            <Col lg="2">
              <div className="img-box mt-5">
                <img src={heroImg02} alt="no-img"></img>
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* ====== service ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service-subtitle">What we serve</h5>
              <h2 className="service-title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ====== service ========== */}

      {/* ======== featured tour ================= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTitle subtitle="Explore" />
              <h2 className="featured-title">our featured tours</h2>
            </Col>
            <TourList />
          </Row>
        </Container>
      </section>
      {/* ======== featured tour ================= */}

      {/* ======== experience section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience-content">
                <SubTitle subtitle="Experince" />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit, sed do eiusmod tempor incididun
                </p>
              </div>
              <div className="experience-wrapper d-flex align-items-center gap-5">
                <div className="experience-box">
                    <span>12k+</span>     
                    <h6>Successful trip</h6>           
                </div>
                <div className="experience-box">
                    <span>2k+</span>     
                    <h6>Regular clients</h6>           
                </div>
                <div className="experience-box">
                    <span>15+</span>     
                    <h6>Years Experience</h6>           
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience-img">
                <img src={ExperienceImg} alt="no-img"></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ======== experience section ============ */}

      {/* ======== gallery section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTitle subtitle="Gallery"/>
              <h2 className="gallery-title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg="12">
              <MasonryImage/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ======== gallery section ============ */}

      {/* ======== fan section ================ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTitle subtitle="Fans Love"/>
              <h2 className="fan-title">What our fans saying about us</h2>
            </Col>
            <Col lg="12">
              <FanList/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ======== fan section ================ */}

      {/* ======== newsletter section =========*/}
      <NewsLetter/>
      {/* ======== newsletter section =========*/}
    </>
  );
}

export default Home;
