import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/Arrow/arrow';

function BottomSlider({ content = [] }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
    centerMode: true,
    centerPadding: '25%',
    responsive: [
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1.15,
          centerMode: true,
          centerPadding: '0%',
          transformEnabled: true,
        },
      },
    ],
  };

  return (
    <div className="slider1">
      <Slider {...settings} className="m-100 sm:m-0 sm:mt-80">
        {content.map((element) => (
          <div className="rounded-sm h-200 text-base">
            <div className="shadow scroll-none h-239 lg:h-335 sm:h-345 overflow-auto mx-20 mb-38 text-base sm:text-sm  text-black p-35 sm:p-20 relative">
              {element.text}
              <img
                src="/images/home/vector.svg"
                className="absolute bottom-_17 left-20"
              />
            </div>
            <div className="flex mx-20 mb-20">
              <div
                style={{
                  backgroundImage: `url(${element.image ? element.image : '/images/home/slider.svg'})` 
                }}
                className="w-50 h-50 rounded-full bg-cover bg-center"
              />
              <div className="ml-35">
                <div className="text-18 sm:text-base font-display text-blue font-display">
                  {element.name}
                </div>
                <div className="leading-3 sm:text-sm font-display text-light-grey ">
                  {element.category}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BottomSlider;
