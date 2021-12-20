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
import { BottomSlider } from 'components/Slider';

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
    header_image,
  } = acf;

  const {
    title: section_1_title,
    description: section_1_description,
    slider: slider1 = [],
  } = section_1;
  const { heading: principles_heading, sub_content = [] } = principles;

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
    if (slider1 && sliderRef.current?.children[0]?.children[1]) {
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
    }
  }, [sliderRef, slider1]);

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

  return (
    <Container>
      <>
        <div className="pt-60 mx-20 mb-272 sm:mb-100">
          <div className="flex sm:flex-col w-100% justify-between max-w-lg m-auto px-100 sm:px-0">
            <div className="sm:w-100% w-40% lg:w-60% mr-100">
              <div className="text-left  heading pb-20 sm:pb-0 sm:w-100% sm:text-center">
                {heading}
              </div>
              <div className="content text-18 sm:text-center mb-30">
                {description}
              </div>
            </div>
            <div className="w-50% md:w-50% sm:w-100% mx-auto mt-120">
              <div className="relative mx-auto ml-_20">
                <picture>
                  <source
                    media="(max-width:650px)"
                    srcset="images/support/mbl-container.svg"
                  />
                  <img
                    className="h-100% w-100% relative "
                    src="images/support/container.svg"
                  />
                </picture>

                <img
                  className="object-cover absolute left-45% md:left-45% sm:left-53% lg:bottom-80 md:bottom-70  sm:w-80% lg:rounded rounded-md transform-x bottom-120 h-100% w-60%"
                  // src="images/PROGRESS/Support.jpg"
                  src={header_image}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse sm:flex-col">
          <div className=" sm:mb-113 w-50% sm:w-100%">
            <div className="sub-heading text-blue sm:text-center pb-20 ml-173 sm:mx-20 w-50% sm:w-100%">
              {section_1_title}
            </div>
            <div className="content sm:text-center w-50% sm:w-100% ml-173 sm:mx-20 md:pb-80 sm:ml-0">
              {section_1_description}
            </div>
            <div className="slider2 sm:hidden">
              <Slider {...settings2} className="m-100 ">
                {slider1.map((element) => (
                  <div className="rounded-sm h-200 w-100% max-w-270 pr-20 text-base">
                    <img src={element.image.url} />

                    <div className="w-100% max-w-270 mr-20 mt-20">
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
            <div className="ml-40% ml-16% sm:ml-0 sm:mr-0 mr-20%">
              <div className="sub-heading text-white pb-34 pt-315">
                {principles_heading}
              </div>

              <div className="pb-70">
                {sub_content.map((element) => (
                  <div className="flex">
                    <img
                      // src="./images/home/principle1.svg"
                      src={element.logo}
                      className="w-70 h-70 lg:w-100% md:w-11%"
                    />
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
              className="slider2 hidden sm:block sm:pb-30 sm:mr-_20"
              id="mbl-slider"
              ref={sliderRef}
            >
              <Slider ref={(c) => setSlider(c)} {...settings1} className="">
                {slider1.map((item, index) => (
                  <div className="rounded-sm h-200 w-270 text-base mt-18">
                    <img
                      src={item.image.url}
                      className="rounded-sm h-120 my-auto w-217 "
                    />

                    <div className="w-217 mt-20">
                      <div>
                        <div className="text-base  font-display text-white font-bold font-display pb-10">
                          {item.name}
                        </div>
                        <div className="text-sm font-display text-white ">
                          {item.description}
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
          <BottomSlider content={slider_2} />
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
