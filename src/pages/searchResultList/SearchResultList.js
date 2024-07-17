import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useState } from "react";

import CommonSection from "../../shared/CommonSection";
import TourCard from "../../shared/TourCard";
import NewsLetter from "../../shared/NewsLetter";

import "./SearchResultList.css";
function SearchResultList() {
  const location = useLocation();
  const [data] = useState(location.state);
  return (
    <>
      <CommonSection title="Tour search result"></CommonSection>
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data.map((tour) => (
                <Col lg="3" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
}

export default SearchResultList;
