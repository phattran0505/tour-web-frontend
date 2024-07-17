import { Col } from "reactstrap";

import ServiceCard from "./ServiceCard";
import weatherImg from "./../assets/images/weather.png";
import guideImg from "./../assets/images/guide.png";
import customizationImg from "./../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    imgUrl: guideImg,
    title: "Best tour guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    imgUrl: customizationImg,
    title: "Customiztion",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];
function ServiceList() {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
}

export default ServiceList;
