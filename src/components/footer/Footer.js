import { ListGroup, ListGroupItem, Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { FiYoutube, FiMapPin } from "react-icons/fi";
import { FaGithub, FaInstagram, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

import logo from "../../assets/images/logo.png";

import "./Footer.css";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const discover_link = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];
  const quick_link = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo-footer">
              <img src={logo} alt=""></img>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="social-links">
                <span>
                  <Link to="#">
                    <FiYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaGithub />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaInstagram />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaFacebook />
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5>Discover</h5>
            <ListGroup className="footer-links">
              {discover_link.map((link, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={link.path}>{link.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5>Quick Links</h5>
            <ListGroup className="footer-links">
              {quick_link.map((link, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={link.path}>{link.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5>Contact</h5>
            <ListGroup className="footer-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <FiMapPin style={{ color: "#faa935" }} />
                  </span>
                  Adress:
                </h6>
                <p className="mt-0 mb-0">HoChiMinh, VietNam</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <MdMailOutline style={{ color: "#faa935" }} />
                  </span>
                  Email:
                </h6>
                <p className="mt-0 mb-0">phattran0123@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <FaPhoneAlt style={{ color: "#faa935" }} />
                  </span>
                  Phone:
                </h6>
                <p className="mt-0 mb-0">+0123456789</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12">
            <p className="copyright">
              Copyright {year}, desinged and developer by Phattran. All right
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
