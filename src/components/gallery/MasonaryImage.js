import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import gallery from "./GalleryImage";
function MasonryImage() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {gallery.map((item, index) => (
          <img
            className="image-card"
            src={item}
            key={index}
            alt="no-img"
            style={{ width: "100%", display: "block", borderRadius: "10px"}}
          ></img>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default MasonryImage;
