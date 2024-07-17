import CommonSection from "../../shared/CommonSection";
import SearchBar from "../../shared/SearchBar";
import TourCard from "../../shared/TourCard";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

import { BASE_URL } from "../../utils/config";
import useFetch from "../../hooks/useFetch";
import NewLetter from "../../shared/NewsLetter";

import "./Tours.css";
function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    error,
    loading,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);
  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);
  
  console.log(pageCount);
  return (
    <>
      <CommonSection title="All tours" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center">loading....</h4>}
          {error && <h4 className="text-center">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours.map((tour) => (
                <Col lg="3" key={tour._id} className="mb-4">
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      <NewLetter />
    </>
  );
}

export default Tours;
