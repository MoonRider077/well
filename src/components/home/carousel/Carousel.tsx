import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import Banner from "./Banner";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }
  
  const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div 
        className={`${className} custom-arrow`}
        style={{ ...style, right: "-60px" }}
        onClick={onClick}
      />
    );
  };
  
  const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div 
        className={`${className} custom-arrow`}
        style={{ ...style, left: "-60px" }}
        onClick={onClick}
      />
    );
  };

  const Carousel: React.FC = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  
  return (
    <div className="mx-auto pt-10 sm:pt-[3.125rem] max-w-screen-xl">
        <div className="slider-container">
          <Slider {...settings}>
            <Banner />
            <Banner />
            <Banner />
          </Slider>
        </div>
    </div>
  );
}

export default Carousel;
