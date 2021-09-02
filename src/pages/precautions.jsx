import React, { useRef, useState } from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/Arrow/arrow';
import { useEffect } from 'react';

function Precautions() {
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1.15,
          centerMode: false,
          centerPadding: '100%',
        },
      },
    ],
  };

  const settings1 = {
    dots: false,
    infinite: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
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
    console.log(
      sliderRef.current.children[0].children[1].children[0].children[
        changeEvent
      ],
      'abch',
      sliderRef.current.children[0].children[1].children[0].children.length
    );
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

      imgSlider.style.height = '158px';
      imgSlider.style.borderRadius = '8px';
      containerSlider.style.marginTop = '0px';

      prevImgSlider.style.height = '122px';
      prevImgSlider.style.borderRadius = '8px';
      prevContainerSlider.style.marginTop = '18px';

      setChangeEvent((prev) => prev - 1);
    }
    console.log('shhs');
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

      console.log(
        sliderRef.current.children[0].children[1].children[0].children[
          changeEvent
        ],
        'length',
        sliderRef.current.children[0].children[1].children[0].children.length
      );
      setChangeEvent((prev) => {
        if (prev + 1 < totalLength) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    } else {
    }
    console.log('shhs');
  };

  return (
    <Container>
      <>
        <div className="pt-60 mx-20 2xl:mb-272 sm:mb-100">
          <div className="2xl:flex w-100% 2xl:justify-between 2xl:max-w-lg 2xl:m-auto 2xl:px-100">
            <div className="sm:w-100% 2xl:w-50%">
              <div className="2xl:text-3xl 2xl:text-left 2xl: heading pb-20 sm:mx-20">
                Your Support Team
              </div>
              <div className="content 2xl:text-18 sm:text-center mb-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac lacinia ex, vitae scelerisque nisl. Sed ac velit sit amet
                odio rutrum dignissim sed ac felis. Mauris convallis magna
                lectus, id blandit metus volutpat non.
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
        <div className="2xl:flex 2xl:flex-row-reverse ">
          <div className="sm:mx-20 sm:mb-113 2xl:w-50% ">
            <div className="sub-heading text-blue sm:text-center pb-20 2xl:ml-173 ">
              Lorem ipsum dolor sit amet
            </div>
            <div className="content sm:text-center 2xl:w-50% 2xl:ml-173 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              lacinia ex, vitae scelerisque nisl. Sed ac velit sit amet odio
              rutrum dignissim sed ac felis. Mauris convallis magna lectus, id
              blandit metus volutpat non. Quisque bibendum libero bibendum,
              malesuada libero id, tristique nisl. Sed faucibus placerat libero
              bibendum, malesuada libero id, tristique nisl. Sed faucibus
              placerat
            </div>
            <div className="slider2 sm:hidden">
              <Slider {...settings1} className="2xl:m-100 ">
                {[...Array(4)].map(() => (
                  <div className="rounded-sm h-200 w-270 text-base">
                    <img src="/images/support/slider-pic.jpeg" />

                    <div className="w-270 mt-20">
                      <div>
                        <div className="text-base  font-display text-black-gray font-bold font-display pb-10">
                          Mike Vincent
                        </div>
                        <div className="text-sm font-display text-gray-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="bg-gradient-blue pl-20 mr-20 relative rounded-r-md 2xl:w-52% ">
            <img
              src="images/support/principle.svg"
              className="2xl:h-580 h-305 rounded-l-sm absolute 2xl:right-_13% 2xl:top-_237 sm:top-_70 sm:right-_20"
            />
            <div className="2xl:ml-40% 2xl:mr-20%">
              <div className="sub-heading text-white pb-34 pt-315">
                Our principles
              </div>
              <div className="flex">
                <div className="w-38%">
                  <img src="images/support/principle1.svg" />
                </div>

                <div className="mx-20 mt-10">
                  <div className="footer-label font-bold">Principl 1</div>
                  <div className="label my-10 text-white">
                    Lorem Ipsum has been the industry’ standard dummy text ever
                    since the 1500s, when an unk
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-38%">
                  <img src="images/support/principle2.svg" />
                </div>

                <div className="mx-20 mt-10">
                  <div className="footer-label font-bold">Principl 2</div>
                  <div className="label my-10 text-white">
                    Lorem Ipsum has been the industry’ standard dummy text ever
                    since the 1500s, when an unk
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-38%">
                  <img src="images/support/principle3.svg" />
                </div>

                <div className="mx-20 mt-10">
                  <div className="footer-label font-bold">Principl 3</div>
                  <div className="label mt-10 text-white pb-80">
                    Lorem Ipsum has been the industry’ standard dummy text ever
                    since the 1500s, when an unk
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slider2 2xl:hidden sm:pb-30 sm:mr-_20"
              id="mbl-slider"
              ref={sliderRef}
            >
              <Slider
                ref={(c) => setSlider(c)}
                {...settings1}
                className="2xl:m-100 "
              >
                {[...Array(4)].map(() => (
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
                  <Arrow dir="left" onClick={() => prevSlide()} />
                </div>
                <Arrow dir="right" onClick={() => nextSlide()} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slider1">
            <Slider {...settings} className="2xl:m-100 sm:mt-80">
              {[...Array(4)].map(() => (
                <div className="rounded-sm h-200 text-base">
                  <div className="shadow mx-20 mb-38 2xl:text-base sm:text-sm  text-black 2xl:p-35 sm:p-20 relative">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam et nisl dignissim, elementum nulla tempor, semper
                    dui. Pellentesque habitant morbi tristique senectus. Lorem
                    ipsum dolor sit amet, consectetur adipiscnisl dignissim,
                    elementum nulla tempor, semper dui. Pellentesque habitant
                    morbi tristique senectus. Lorem ipsum dolor sit amet,
                    consectetur adipiscinga dui. Pellentesque habitant morbi
                    tristique senectus.
                    <img
                      src="/images/home/vector.svg"
                      className="absolute bottom-_17 left-20"
                    />
                  </div>
                  <div className="flex mx-20">
                    <img src="/images/home/slider.svg" className="w-50 h-50" />
                    <div className="ml-35">
                      <div className="2xl:text-18 sm:text-base font-display text-blue font-display">
                        Patrick Lindbark
                      </div>
                      <div className="2xl:text-16 sm:text-sm font-display text-light-grey">
                        Expert
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="2xl:max-w-lg 2xl:m-auto 2xl:px-100">
          <div className="mb-_40 mt-80">
            <MobileForm />
          </div>
        </div>
      </>
    </Container>
  );
}

export default Precautions;
