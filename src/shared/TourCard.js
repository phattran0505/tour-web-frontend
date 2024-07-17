import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { LuMapPin } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

import "./TourCard.css";
function TourCard({ tour }) {
  return (
    <div className="tour-card">
      <Card>
        <div className="tour-img">
          <img src={tour.photo} alt="no-img"></img>
          <span>Featured</span>
        </div>
      </Card>
      <CardBody>
        <div className="card-top d-flex align-items-center justify-content-between">
          <div className="tour-location d-flex align-items-center">
            <LuMapPin style={{color:"#faa935"}}/>
            <span>{tour.city}</span>
          </div>

          <div className="tour-rate d-flex align-items-center">
            <FaStar  style={{color:"#faa935"}}/> 
            <span>({tour.reviews.length})</span>
          </div>
        </div>

        <div className="card-title">
          <h5>
            <Link to={`/tours/${tour._id}`}>{tour.title}</Link>
          </h5>
        </div>

        <div className="card-bottom d-flex align-items-center justify-content-between">
          <div className="price">
            <p>
              <span className="highlight">${tour.price} </span>
              /per person
            </p>
          </div>

          <button className="booking-btn">
            <Link to={`/tours/${tour._id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
    </div>
  );
}

export default TourCard;
