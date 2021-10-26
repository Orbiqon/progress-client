import React, { useRef, useState } from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/Arrow/arrow';
import { useEffect } from 'react';
import { staticDataService } from 'api';
import { useFetch } from 'hooks';

function Support() {
  const { data, status } = useFetch(staticDataService, {
    variables: `support`,
  });

  const [element = {}] = data || [];
  const { acf = {} } = element;

  const {
    heading,
    description,
    section_1 = {},
    principles = {},
    slider_2 = [],
  } = acf;

  const {
    title: section_1_title,
    description: section_1_description,
    slider: slider1 = [],
  } = section_1;
  const { heading: principles_heading, sub_content = [] } = principles;

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

  const settings1 = {
    dots: false,
    infinite: false,
    draggable: true,
    swipeToSlide: true,
    touchMove: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: false,
    // nextArrow: <Arrow dir="right" />,
    // prevArrow: <Arrow dir="left" />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
    // centerPadding: '25%',
  };

  const settings2 = {
    dots: false,
    infinite: false,
    draggable: true,
    swipeToSlide: true,
    touchMove: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: true,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
    // centerPadding: '25%',
  };
  const sliderRef = useRef();
  const sliderRef1 = useRef();

  // const x = document.gdetElementById('mbl-slider');
  const [slider, setSlider] = useState();
  const [changeEvent, setChangeEvent] = useState(0);
  const [totalLength, setTotalLength] = useState(0);
  useEffect(() => {
    let imgSlider =
      sliderRef.current.children[0].children[1].children[0].children[
        changeEvent
      ].children[0].children[0].children[0];

    let containerSlider =
      sliderRef.current.children[0].children[1].children[0].children[
        changeEvent
      ].children[0].children[0];

    imgSlider.style.height = '158px';
    imgSlider.style.borderRadius = '8px';
    containerSlider.style.marginTop = '0px';

    setTotalLength(
      sliderRef.current.children[0].children[1].children[0].children.length
    );
  }, [sliderRef]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prevSlide = () => {
    slider.slickPrev();

    if (changeEvent - 1 >= 0) {
      let imgSlider =
        sliderRef.current.children[0].children[1].children[0].children[
          changeEvent - 1
        ].children[0].children[0].children[0];

      let containerSlider =
        sliderRef.current.children[0].children[1].children[0].children[
          changeEvent - 1
        ].children[0].children[0];

      let prevImgSlider =
        sliderRef.current.children[0].children[1].children[0].children[
          changeEvent
        ].children[0].children[0].children[0];

      let prevContainerSlider =
        sliderRef.current.children[0].children[1].children[0].children[
          changeEvent
        ].children[0].children[0];

      imgSlider.style.height = '158px';
      imgSlider.style.borderRadius = '8px';
      containerSlider.style.marginTop = '0px';

      prevImgSlider.style.height = '122px';
      prevImgSlider.style.borderRadius = '8px';
      prevContainerSlider.style.marginTop = '18px';

      setChangeEvent((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    slider.slickNext();

    if (changeEvent + 1 < totalLength) {
      let imgSlider =
        sliderRef.current.children[0].children[1].children[0].children[
          changeEvent + 1
        ].children[0].children[0].children[0];

      let containerSlider =
        sliderRef.current.children[0].children[1].children[0].children[
          changeEvent + 1
        ].children[0].children[0];

      let prevImgSlider =
        sliderRef.current.children[0].children[1].children[0].children[
          changeEvent
        ].children[0].children[0].children[0];

      let prevContainerSlider =
        sliderRef.current.children[0].children[1].children[0].children[
          changeEvent
        ].children[0].children[0];

      imgSlider.style.height = '158px';
      imgSlider.style.borderRadius = '8px';
      containerSlider.style.marginTop = '0px';

      prevImgSlider.style.height = '122px';
      prevImgSlider.style.borderRadius = '8px';
      prevContainerSlider.style.marginTop = '18px';
      setChangeEvent((prev) => {
        if (prev + 1 < totalLength) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    } else {
    }
  };
  {
    console.log('slid', slider);
  }
  return (
    <Container>
      <>
        <div className="pt-60 mx-20 mb-272 sm:mb-100">
          <div className="flex sm:flex-col w-100% justify-between max-w-lg m-auto px-100 sm:px-0">
            <div className="sm:w-100% w-50%">
              <div className="text-3xl text-left  heading pb-20 sm:pb-0 sm:w-100% sm:text-center">
                {heading}
              </div>
              <div className="content text-18 sm:text-center mb-30">
                {description}
              </div>
            </div>
            <picture>
              <source
                media="(min-width:651px)"
                srcset="images/support/card-header.svg"
              />
              <source
                media="(max-width:650px)"
                srcset="images/support/card-header-mbl.svg"
              />
              <img className="m-auto" src="images/support/card-header.svg" />
            </picture>
          </div>
        </div>
        <div className="flex flex-row-reverse sm:flex-col">
          <div className=" sm:mb-113 w-50% sm:w-100%">
            <div className="sub-heading text-blue sm:text-center pb-20 ml-173 sm:mx-20">
              {section_1_title}
            </div>
            <div className="content sm:text-center w-50% sm:w-100% ml-173 sm:mx-20 sm:ml-0">
              {section_1_description}
            </div>
            <div className="slider2 sm:hidden">
              <Slider {...settings2} className="m-100 ">
                {slider1.map((element) => (
                  <div className="rounded-sm h-200 w-270 text-base">
                    <img src={element.image.url} />

                    <div className="w-270 mt-20">
                      <div>
                        <div className="text-base  font-display text-black-gray font-bold font-display pb-10">
                          {element.name}
                        </div>
                        <div className="text-sm font-display text-gray-black">
                          {element.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="bg-gradient-blue pl-20 mr-20 relative rounded-r-md sm:w-95% w-52%  ">
            <img
              src="images/support/principle.svg"
              className="h-580 h-305 rounded-l-sm absolute right-_13% top-_237 sm:top-_190 sm:right-_20"
            />
            <div className="ml-40% sm:ml-0 sm:mr-0 mr-20%">
              <div className="sub-heading text-white pb-34 pt-315">
                {principles_heading}
              </div>

              <div className="pb-70">
                {sub_content.map((element) => (
                  <div className="flex">
                    <div className="w-38%">
                      <img src={element.logo} />
                    </div>

                    <div className="mx-20 mt-10">
                      <div className="footer-label font-bold">
                        {element.title}
                      </div>
                      <div className="label mt-10 text-white pb-10">
                        {element.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="slider2 hidden sm:pb-30 sm:mr-_20"
              id="mbl-slider"
              ref={sliderRef}
            >
              <Slider
                ref={(c) => setSlider(c)}
                {...settings1}
                className="m-100 "
              >
                {[...Array(4)].map((item, index) => (
                  <div className="rounded-sm h-200 w-270 text-base mt-18">
                    <img
                      src="/images/support/slider-pic.jpeg"
                      className="rounded-sm h-120 my-auto"
                    />

                    <div className="w-270 mt-20">
                      <div>
                        <div className="text-base  font-display text-white font-bold font-display pb-10">
                          Mike Vincent
                        </div>
                        <div className="text-sm font-display text-white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="flex justify-end mr-40">
                <div className="mr-10">
                  <Arrow
                    dir="left"
                    icon="Arrow"
                    // className={index == 0 ? 'opacity-10' : ''}
                    onClick={() => prevSlide()}
                  />
                </div>
                <Arrow
                  dir="right"
                  icon="Arrow"
                  // className={index == 3 ? 'opacity-10' : ''}
                  onClick={() => nextSlide()}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slider1">
            <Slider {...settings} className="m-100 sm:m-0 sm:mt-80">
              {slider_2.map((element) => (
                <div className="rounded-sm h-200 text-base">
                  <div className="shadow mx-20 mb-38 text-base sm:text-sm  text-black p-35 sm:p-20 relative">
                    {element.text}
                    <img
                      src="/images/home/vector.svg"
                      className="absolute bottom-_17 left-20"
                    />
                  </div>
                  <div className="flex mx-20">
                    <img
                      src={
                        element.image
                          ? element.image
                          : '/images/home/slider.svg'
                      }
                      className="w-50 h-50"
                    />
                    <div className="ml-35">
                      <div className="text-18 sm:text-base font-display text-blue font-display">
                        {element.name}
                      </div>
                      <div className="text-16 sm:text-sm font-display text-light-grey">
                        {element.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="max-w-lg m-auto px-100 sm:px-0">
          <div className="mb-_40 mt-80">
            <MobileForm />
          </div>
        </div>
      </>
    </Container>
  );
}

export default Support;
