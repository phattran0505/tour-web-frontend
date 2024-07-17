import Slider from "react-slick";

import avatar01 from "../../assets/images/ava-1.jpg";
import avatar02 from "../../assets/images/ava-2.jpg";
import avatar03 from "../../assets/images/ava-3.jpg";
function FanList() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpont: 992,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpont: 992,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="fan-box py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="d-flex align-items-center gap-3 mt-3">
          <img
            className="w-25 h-25 rounded-2"
            src={avatar01}
            alt="no-img"
          ></img>
          <div className="user">
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="fan-box py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="d-flex align-items-center gap-3 mt-3">
          <img
            className="w-25 h-25 rounded-2"
            src={avatar02}
            alt="no-img"
          ></img>
          <div className="user">
            <h6 className="mb-0 mt-3">Lia</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="fan-box py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="d-flex align-items-center gap-3 mt-3">
          <img
            className="w-25 h-25 rounded-2"
            src={avatar03}
            alt="no-img"
          ></img>
          <div className="user">
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="fan-box py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="d-flex align-items-center gap-3 mt-3">
          <img
            className="w-25 h-25 rounded-2"
            src={avatar01}
            alt="no-img"
          ></img>
          <div className="user">
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default FanList;
