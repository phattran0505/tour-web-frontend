import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";

import LoginImg from "../../assets/images/login.png";
import UserImg from "../../assets/images/user.png";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

import "./Login.css";
function Login() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [datas, setDatas] = useState({
    email: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    setDatas((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(datas),
      });
      if (!res.ok) alert(res.message);
      const result = await res.json();
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login-container d-flex align-items-center justify-contnet-between">
              <div className="login-img">
                <img src={LoginImg} alt="no-img"></img>
              </div>
              <div className="login-user">
                <div className="user">
                  <img src={UserImg} alt="no-img"></img>
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
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
                  <Button type="submit">Login</Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
