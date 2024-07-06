import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsBanner from './NewsBanner';
import NewsBanner2 from './NewsBanner2';
import NewsBanner3 from './NewsBanner3';
import './NewsBanner.css'

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div 
            className={`${className} news-arrow slick-next`}
            style={{ ...style, right: "-60px" }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div 
            className={`${className} news-arrow slick-prev`}
            style={{ ...style, left: "-60px" }}
            onClick={onClick}
        />
    );
};

const NewsMobileCarousel: React.FC = () => {
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
        <div className={`sm:pt-5 news-banner`}>
            <div className="slider-container">
                <Slider {...settings}>
                    <NewsBanner />
                    <NewsBanner2 />
                    <NewsBanner3 />
                </Slider>
            </div>
        </div>
    );
}

export default NewsMobileCarousel;
