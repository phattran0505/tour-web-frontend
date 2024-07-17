
import "./ServiceCard.css"
function ServiceCard({ item }) {
  return (
    <div className="service-item">
      <div className="service-img">
        <img src={item.imgUrl} alt="no-img"></img>
      </div>
      <h5>{item.title}</h5>
      <p>{item.desc}</p>
    </div>
  );
}

export default ServiceCard;
