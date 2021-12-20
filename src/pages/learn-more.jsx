import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';
import { BookCallVideo } from 'components/BookCallVideo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/Arrow/arrow';
import { staticDataService } from 'api';
import { useFetch } from 'hooks';

function LearnMore() {
  const { data, status } = useFetch(staticDataService, {
    variables: `learnmore`,
  });

  const [element = {}] = data || [];
  const { acf = {} } = element;
  const {
    heading,
    description,
    header_image,
    video_section = {},
    slider: slider1 = {},
    contact = {},
    section_image,
  } = acf;
  const {
    title: video_section_title,
    description: video_section_description,
  } = video_section;
  const {
    title: slider_title,
    description: slider_description,
    slider: slider_slider = [],
  } = slider1;
  const {
    heading: contact_heading,
    description: contact_description,
  } = contact;

  const settings1 = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" icon="Arrow" />,
    prevArrow: <Arrow dir="left" icon="Arrow" />,
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: false,
  };

  const [slider, setSlider] = useState();
  const [changeEvent, setChangeEvent] = useState(0);
  const [totalLength, setTotalLength] = useState(0);
  const sliderRef = useRef();
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

      imgSlider.style.height = '305px';
      imgSlider.style.borderRadius = '8px';
      containerSlider.style.marginTop = '0px';

      prevImgSlider.style.height = '239px';
      prevImgSlider.style.borderRadius = '8px';
      prevContainerSlider.style.marginTop = '26px';

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

      imgSlider.style.height = '305px';
      imgSlider.style.borderRadius = '8px';
      containerSlider.style.marginTop = '0px';

      prevImgSlider.style.height = '239px';
      prevImgSlider.style.borderRadius = '8px';
      prevContainerSlider.style.marginTop = '26px';

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
      <div className="pt-60 ">
        <div className="flex sm:flex-col w-100% justify-between max-w-lg m-auto sm:px-0 px-100">
          <div className="sm:w-100% w-50%">
            <div className="text-3xl text-left sm:text-center heading pb-20  sm:mx-20">
              {heading}
            </div>
            <div className="content text-18 sm:text-center sm:mx-20 mb-40">
              <span className="w-50%">{description}</span>
            </div>
          </div>
          <div className="w-50% md:w-50% sm:w-100% mx-auto mt-120">
            <div className="relative mx-auto mr-_20">
              <picture>
                <source
                  media="(max-width:650px)"
                  srcset="images/learn-more/mbl-container.svg"
                />
                <img
                  className="h-100% w-100% relative "
                  src="images/learn-more/container.svg"
                />
              </picture>
              <img
                className="object-cover absolute left-45% sm:left-50% md:left-45% lg:bottom-80 md:bottom-80 sm:bottom-120 lg:rounded rounded-md transform-x bottom-120 h-90% w-60%"
                // src="images/PROGRESS/LearnMore.PNG"
                src={header_image}
              />
            </div>
          </div>
        </div>
        <div className="sm:pb-80 pt-100 sm:pt-40 pb-120">
          <BookCallVideo
            heading={video_section_title}
            text={video_section_description}
            step={false}
          />
        </div>
        <div className="flex sm:flex-col-reverse ">
          <div className="bg-gradient-blue  relative rounded-r-md py-40 sm:mr-20 w-50% sm:w-90%">
            <div>
              <img
                // src="/images/PROGRESS/learn.PNG"
                src={section_image}
                className="w-80% float-right mr-30"
                alt=""
              />
            </div>
          </div>
          <div className="ml-100 w-30% sm:w-100% sm:ml-0 sm:mb-100">
            <div className="sub-heading mx-20 text-blue text-2xl sm:text-center pb-20">
              {slider_title}
            </div>
            <div className="mx-20 content sm:text-center">
              {slider_description}
            </div>
          </div>
        </div>
        <div className="max-w-lg m-auto px-100 sm:px-0">
          <div className="mb-_40 mt-80 ">
            <MobileForm
              title={contact_heading}
              description={contact_description}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LearnMore;
