import React from 'react';
import { Container } from 'Layout';
import { Box } from 'components/Box';
import { MobileForm } from 'components/Form';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/Arrow/arrow';

function Information() {
  const settings1 = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <>
        <div className="2xl:pt-80 sm:pt-60 2xl:max-w-lg 2xl:m-auto 2xl:px-100 sm:mx-38">
          <div className="heading pb-13">Testimonials & FAQ</div>
          <div className="content 2xl:text-18 text-center sm:mb-40 2xl:mb-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            lacinia ex, vitae scelerisque nisl. Sed ac velit sit amet odio
            rutrum dignissim sed ac felis. Mauris convallis magna lectus, id
            blandit metus volutpat non.
          </div>
          <div className="2xl:flex">
            <div className="2xl:mr-30">
              <Box
                heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
                detail="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac velit sit amet
odio rutrum dignissim sed ac felis.
"
              />
              <Box
                heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
              />
              <Box
                heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
              />
            </div>
            <div>
              <Box
                heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
              />
              <Box
                heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-light-blue 2xl:mt-100 px-20 pt-40 pb-20">
          <div className="slider3 2xl:max-w-lg 2xl:m-auto 2xl:px-100">
            <Slider {...settings1} className="mb-100">
              {[...Array(4)].map(() => (
                <div className="rounded-sm  w-370 text-base">
                  <img
                    src="/images/support/slider-pic.jpeg"
                    className="w-370"
                  />

                  <div className="sm:98% 2xl:w-270 rounded-lg py-20  relative">
                    <div className="bg-white p-20 rounded-lg">
                      Lorem ipsum dolor sit amet, consectetur solser adipiscing
                      elit. Nullam et nisl dignissim, salalaks kakas elementum
                      nulla tempor
                    </div>
                    <img
                      src="/images/home/vector.svg"
                      className="absolute bottom-3 left-20"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="2xl:max-w-lg 2xl:m-auto 2xl:px-100">
          <div className="mb-_40 mt-80 ">
            <MobileForm />
          </div>
        </div>
      </>
    </Container>
  );
}

export default Information;
