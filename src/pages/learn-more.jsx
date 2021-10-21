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
    video_section = {},
    slider: slider1 = {},
    contact = {},
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

    // centerPadding: '25%',
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: false,
    // nextArrow: <Arrow dir="right" />,
    // prevArrow: <Arrow dir="left" />,

    // centerPadding: '25%',
  };

  const [slider, setSlider] = useState();
  const [changeEvent, setChangeEvent] = useState(0);
  const [totalLength, setTotalLength] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    let imgSlider =
      sliderRef.current.children[0].children[1].children[0].children[
        changeEvent
      ].children[0].children[0].children[0];

    let containerSlider =
      sliderRef.current.children[0].children[1].children[0].children[
        changeEvent
      ].children[0].children[0];

    imgSlider.style.height = '305px';
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
            <div className="text-3xl text-left sm:text-center heading pb-20 mx-20">
              {heading}
            </div>
            <div className="content text-18 sm:text-center sm:mx-20 mb-40">
              <span className="w-50%">{description}</span>
            </div>
          </div>
          <picture>
            <source
              media="(min-width:651px)"
              srcset="images/learn-more/card-header.svg"
            />
            <source
              media="(max-width:650px)"
              srcset="images/learn-more/card-header-mbl.svg"
            />
            <img className="m-auto" src="images/learn-more/card-header.svg" />
          </picture>
        </div>
        <div className="sm:pb-80 pt-100 sm:pt-40 pb-120">
          <BookCallVideo
            heading={video_section_title}
            text={video_section_description}
            step={false}
          />
        </div>
        <div className="flex sm:flex-col-reverse ">
          <div className="bg-gradient-blue rounded-r-md py-40 sm:mr-20 w-50% sm:w-90%">
            <div
              className="hidden sm:block slider4 sm:ml-20 sm:mr-_20"
              ref={sliderRef}
            >
              <Slider {...settings} ref={(c) => setSlider(c)}>
                {[...Array(4)].map(() => (
                  <div className="rounded-sm  text-base sm:pl-20 mt-26">
                    <img
                      src="/images/learn-more/final-report1.jpg"
                      className="rounded-sm h-239"
                    />

                    <div className="pl-20 mt-10">
                      <div className="text-base  font-display text-white  font-display pb-10">
                        Menus / Final report
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="flex justify-end mr-40">
                <div className="mr-10">
                  <Arrow dir="left" onClick={() => prevSlide()} />
                </div>
                <Arrow dir="right" onClick={() => nextSlide()} />
              </div>
            </div>
            <div className="sm:hidden slider4 ">
              <Slider {...settings1}>
                {slider_slider.map((element) => (
                  <div className="rounded-sm  text-base ">
                    <img
                      src={
                        element.image
                          ? element.image
                          : '/images/learn-more/final-report1.jpg'
                      }
                      className="rounded-sm sm:pl-20"
                    />

                    <div className="pl-20 mt-10">
                      <div className="text-base  font-display text-white  font-display pb-10">
                        {element.acf_fc_layout}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
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
