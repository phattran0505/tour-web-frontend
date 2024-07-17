import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  ListGroup,
  Button,
} from "reactstrap";
import { FaStar } from "react-icons/fa";
import {
  RiMapPinUserFill,
  RiMapPinRangeLine,
  RiMapPinTimeLine,
} from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";

import avatar from "../../assets/images/avatar.jpg";
import Booking from "../../components/booking/Booking";
import { BASE_URL } from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";

import "./TourDetail.css";
function TourDetail() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tour, setTour] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    price: "",
    maxGroupSize: "",
    desc: "",
    reviews: [],
    photo: "",
    featured: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tourRating, setTourRating] = useState(null);
  const reviewRef = useRef();

  // call api
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/tours/${id}`);
      const result = await res.json();
      setTour(result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(true);
    }
  }
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [id]);

  // format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // reviews funtion
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewText = reviewRef.current.value;
    try {
      if (!user || user === "user" || user === undefined) {
        alert("Please sign in");
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };
      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });
      const result = await res.json();
      if (!res.ok) return alert(result.message);
      alert ("review submitted")
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center">Loading....</h4>}
          {error && <h4 className="text-center">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour-content">
                  <img src={tour.photo} alt="no-img"></img>
                  <div className="tour-info">
                    <h2>{tour.title}</h2>
                    <div className="tour-top d-flex align-items-center gap-5 mb-3">
                      <div className="tour-rate d-flex align-items-center gap-1">
                        <FaStar style={{ color: "#faa935" }} />
                        <span>({tour.reviews.length})</span>
                      </div>
                      <div className="tour-rate d-flex align-items-center gap-1">
                        <RiMapPinUserFill />
                        <span>Somewhere in {tour.city}</span>
                      </div>
                    </div>
                    <div className="tour-middle d-flex align-items-center gap-4">
                      <div className="d-flex align-items-center gap-1">
                        <RiMapPinRangeLine />
                        <span>{tour.city}</span>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <CiDollar />
                        <span>$99/per person</span>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <RiMapPinTimeLine />
                        <span>{tour.distance} km</span>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <FiUsers />
                        <span>{tour.maxGroupSize} people</span>
                      </div>
                    </div>

                    <div className="tour-des">
                      <h4>Description</h4>
                      <p>this is description</p>
                    </div>
                  </div>
                  {/* ======= tour reviews start =========== */}
                  <div className="tour-info mt-4">
                    <h3>Review ({tour.reviews.length} reviews)</h3>
                    <div className="rate d-flex gap-2 mt-4 mb-4">
                      <span
                        className="d-flex align-items-center"
                        onClick={() => setTourRating(1)}
                        style={{ color: "#faa935" }}
                      >
                        1 <FaStar />
                      </span>
                      <span
                        className="d-flex align-items-center"
                        onClick={() => setTourRating(2)}
                        style={{ color: "#faa935" }}
                      >
                        2 <FaStar />
                      </span>
                      <span
                        className="d-flex align-items-center"
                        onClick={() => setTourRating(3)}
                        style={{ color: "#faa935" }}
                      >
                        3 <FaStar />
                      </span>
                      <span
                        className="d-flex align-items-center"
                        onClick={() => setTourRating(4)}
                        style={{ color: "#faa935" }}
                      >
                        4 <FaStar />
                      </span>
                      <span
                        className="d-flex align-items-center"
                        onClick={() => setTourRating(5)}
                        style={{ color: "#faa935" }}
                      >
                        5 <FaStar />
                      </span>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <FormGroup className="review-form">
                        <input
                          type="text"
                          ref={reviewRef}
                          placeholder="Share your throughts..."
                          required
                        ></input>
                        <Button type="submit" className="primary__btn">
                          Submit
                        </Button>
                      </FormGroup>
                    </Form>

                    <ListGroup>
                      <div className="user-reviews">
                        {tour.reviews
                          ? tour.reviews.map((review, index) => (
                              <div className="review-item" key={index}>
                                <img src={avatar} alt="no-img"></img>

                                <div className="w-100">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                      <h5>{review.username}</h5>
                                      <p>
                                        {new Date(
                                          review.createdAt
                                        ).toLocaleDateString("en-US", options)}
                                      </p>
                                    </div>
                                    <span className="d-flex align-items-center">
                                      {review.rating}{" "}
                                      <FaStar
                                        style={{ color: "#faa935" }}
                                        className="ms-1"
                                      />
                                    </span>
                                  </div>
                                  <h6>{review.reviewText}</h6>
                                </div>
                              </div>
                            ))
                          : ""}
                      </div>
                    </ListGroup>
                  </div>
                  {/* ======= tour reviews end =========== */}
                </div>
              </Col>

              <Col lg="4">
                <Booking tour={tour} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
}

export default TourDetail;
