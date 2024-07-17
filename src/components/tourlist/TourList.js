import { Col } from "reactstrap";
// import tourData from "../../assets/data/tours";
import TourCard from "../../shared/TourCard";

import { BASE_URL } from "../../utils/config";
import useFetch from "../../hooks/useFetch";
import "./TourList.css";
function TourList() {
  const {
    data: featuredTours,
    error,
    loading,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  return (
    <>
      {loading && <h4>loading....</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours.map((tour) => (
          <Col key={tour._id} lg="3" className="mb-4">
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
}

export default TourList;
