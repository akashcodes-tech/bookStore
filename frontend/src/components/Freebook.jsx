import React from "react";
import list from "../../src/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; //react slick slider
import Slider from "react-slick";
import Cards from "./Cards";

const Freebook = () => {
  const filterData = list.filter((item) => {
    return item.category === "free";
  });

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        /* if size is 1024 (breakpoint) show 3 sliders and so on */
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-aut md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic
            est voluptatum quo alias
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item) => {
              return <Cards item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
