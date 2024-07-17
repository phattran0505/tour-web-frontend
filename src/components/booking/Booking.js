import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { BASE_URL } from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";

import "./Booking.css";
function Booking({ tour }) {
  const navigate=useNavigate()
  const {user} = useContext(AuthContext)
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: tour.title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });
  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user || user === "user" || user === undefined){
      alert ("please sign in")
    }
    try {
      const res = await fetch(`${BASE_URL}/booking`,{
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      })
      const result = await res.json()
      if(!res.ok)  return alert (result.message)
      // navigate('/thank-you')
    } catch (error) {
      alert(error.message)
    }
  };
  
  const serviceFee = 10;
  const totalNumber =
    Number(tour.price) * Number(booking.guestSize) + Number(serviceFee);
  return (
    <div className="booking">
      <div className="booking-top d-flex align-items-center justify-content-between">
        <h3>
          ${tour.price}
          <span>/per person</span>
        </h3>
        <div className="booking-rate d-flex align-items-center gap-1">
          <FaStar style={{ color: "#faa935" }} />
          <span>
            {tour.avgRating} ({tour.reviews.length})
          </span>
        </div>
      </div>

      {/* ===== booking form start */}
      <div className="booking-form">
        <h5>Information</h5>
        <Form className="booking-info" onSubmit={handleSubmit} method="post">
          <FormGroup>
            <input
              type="text"
              placeholder="Full name"
              id="fullName"
              required
              onChange={handleChange}
            ></input>
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            ></input>
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              id="bookAt"
              required
              onChange={handleChange}
            ></input>
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              min={0}
              onChange={handleChange}
            ></input>
          </FormGroup>
        </Form>
      </div>
      {/* ===== booking form end */}

      {/* ===== booking bottom start */}
      <div className="booking-bottom">
        <ListGroup>
          <ListGroupItem className="d-flex align-items-center justify-content-between">
            <h5>
              ${tour.price} <IoCloseOutline /> 1 person
            </h5>
            <span>${tour.price}</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex align-items-center justify-content-between">
            <h5>Service change</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="total d-flex align-items-center justify-content-between">
            <h5>Total</h5>
            <span>${totalNumber}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="booking-btn primary__btn" onClick={handleSubmit}>
          Book Now
        </Button>
      </div>
      {/* ===== booking bottom end */}
    </div>
  );
}

export default Booking;
