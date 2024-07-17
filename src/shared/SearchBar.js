import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Form, FormGroup } from "reactstrap";
import { LuMapPin } from "react-icons/lu";
import { RiMapPinTimeLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { BASE_URL } from "../utils/config";

import "./SearchBar.css";
function SearchBar() {
  const navigate = useNavigate();
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxPeopleRef = useRef(0);
  
  async function searchHandler() {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxPeople = maxPeopleRef.current.value;

    if (location === "" || distance === "" || maxPeople === "") {
      return alert("All fields are required");
    }
    
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxPeople}`
    );
    if (!res.ok) alert("Something went wrong!!");
    const result = await res.json();
    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxPeople}`,
      { state: result.data }
    );
  }
  return (    
    <Col lg="12">
      <div className="search-bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex align-items-center gap-3 form-group form-group-border">
            <span>
              <LuMapPin />
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              ></input>
            </div>
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3 form-group form-group-border">
            <span>
              <RiMapPinTimeLine />
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                ref={distanceRef}
              ></input>
            </div>
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3 form-group">
            <span>
              <FiUsers />
            </span>
            <div>
              <h6>Max People</h6>
              <input
                type="number"
                min="0"
                placeholder="0"
                ref={maxPeopleRef}
              ></input>
            </div>
          </FormGroup>
          <span className="search-icon" type="submit" onClick={searchHandler}>
            <IoSearch />
          </span>
        </Form>
      </div>
    </Col>
  );
}

export default SearchBar;
