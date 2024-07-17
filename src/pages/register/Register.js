import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";

import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
import RegisterImg from "../../assets/images/register.png";
import UserImg from "../../assets/images/user.png";

import "./Register.css";
function Register() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setDatas((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post", 
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(datas),
      });
      if (!res.ok) {
        alert(res.message);
      }
      const result = await res.json();
      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login-container d-flex align-items-center justify-contnet-between">
              <div className="login-img">
                <img src={RegisterImg} alt="no-img"></img>
              </div>
              <div className="login-user">
                <div className="user">
                  <img src={UserImg} alt="no-img"></img>
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input
                      type="text"
                      required
                      id="username"
                      placeholder="Name"
                      onChange={handleChange}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      required
                      id="email"
                      placeholder="Email"
                      onChange={handleChange}
                    ></input>
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      required
                      id="password"
                      placeholder="Password"
                      onChange={handleChange}
                    ></input>
                  </FormGroup>
                  <Button type="submit">Create account</Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Register;
