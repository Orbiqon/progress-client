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

  const [element={}]=data||[]
  const {acf={}}=element
  
  const {heading, description, video_section = {}, slider:slider1 = {}, contact = {}} = acf
  const {title : video_section_title, description: video_section_description} = video_section
  const {title : slider_title, description: slider_description, slider : slider2 = []} = slider1



  const settings1 = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,

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
        <div className="2xl:flex w-100% 2xl:justify-between 2xl:max-w-lg 2xl:m-auto 2xl:px-100">
          <div className="sm:w-100% 2xl:w-50%">
            <div className="2xl:text-3xl 2xl:text-left 2xl: heading pb-20 mx-20">
              Learn more
            </div>
            <div className="content 2xl:text-18 sm:text-center sm:mx-20 mb-40">
              <span className="2xl:w-50%">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac lacinia ex, vitae scelerisque nisl. Sed ac velit sit amet
                odio rutrum dignissim sed ac felis. Mauris convallis magna
                lectus, id blandit metus volutpat non. Quisque bibendum libero
                bibendum, malesuada libero id, tristique nisl. Sed faucibus
                placerat neque ac ullamcorper. Vestibulum in turpis ante. Fusce
                mattis arcu sit amet turpis varius, ut congue sem maximus.
                Aliquam interdum aliquam ipsum, vel rutrum mi.
              </span>
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
        <div className="sm:pb-80 2xl:pt-100 sm:pt-40 2xl:pb-120">
          <BookCallVideo step={false} />
        </div>
        <div className="flex sm:flex-col-reverse ">
          <div className="bg-gradient-blue rounded-r-md py-40 sm:mr-20 2xl:w-50%">
            <div
              className="2xl:hidden slider4 sm:ml-20 sm:mr-_20"
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
                {[...Array(4)].map(() => (
                  <div className="rounded-sm  text-base ">
                    <img
                      src="/images/learn-more/final-report1.jpg"
                      className="rounded-sm sm:pl-20"
                    />

                    <div className="pl-20 mt-10">
                      <div className="text-base  font-display text-white  font-display pb-10">
                        Menus / Final report
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="2xl:ml-100 2xl:w-30% sm:mb-100">
            <div className="sub-heading mx-20 text-blue 2xl:text-2xl sm:text-center pb-20">
              Lorem ipsum dolor sit amet
            </div>
            <div className="mx-20 content sm:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              lacinia ex, vitae scelerisque nisl. Sed ac velit sit amet odio
              rutrum dignissim sed ac felis. Mauris convallis magna lectus, id
              blandit metus volutpat non. Quisque bibendum libero bibendum,
              malesuada libero id, tristique nisl. Sed faucibus placerat libero
              bibendum, malesuada libero id, tristique nisl. Sed faucibus
              placerat
            </div>
          </div>
        </div>
        <div className="2xl:max-w-lg 2xl:m-auto 2xl:px-100">
          <div className="mb-_40 mt-80 ">
            <MobileForm />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LearnMore;
