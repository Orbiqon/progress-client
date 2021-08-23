import React from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/Arrow/arrow';

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
  };
  const settings1 = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,

    // centerPadding: '25%',
  };
  return (
    <Container>
      <>
        <div className="pt-60 mx-20 mb-272">
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
            <div className="slider2">
              <Slider {...settings1} className="m-100">
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
          </div>
        </div>
        <div>
          <div className="slider1">
            <Slider {...settings} className="m-100">
              <div className="rounded-sm h-200 text-base">
                <div className="shadow mx-20 mb-38 text-base text-black p-35 relative">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam et nisl dignissim, elementum nulla tempor, semper dui.
                  Pellentesque habitant morbi tristique senectus. Lorem ipsum
                  dolor sit amet, consectetur adipiscnisl dignissim, elementum
                  nulla tempor, semper dui. Pellentesque habitant morbi
                  tristique senectus. Lorem ipsum dolor sit amet, consectetur
                  adipiscinga dui. Pellentesque habitant morbi tristique
                  senectus.
                  <img
                    src="/images/home/vector.svg"
                    className="absolute bottom-_17 left-20"
                  />
                </div>
                <div className="flex">
                  <img src="/images/home/slider.svg" />
                  <div className="ml-35">
                    <div className="text-18 font-display text-blue font-display">
                      Patrick Lindbark
                    </div>
                    <div className="text-16 font-display text-light-grey">
                      Expert
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-sm h-200 text-base">
                <div className="shadow mx-20 mb-38 text-base text-black p-35 relative">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam et nisl dignissim, elementum nulla tempor, semper dui.
                  Pellentesque habitant morbi tristique senectus. Lorem ipsum
                  dolor sit amet, consectetur adipiscnisl dignissim, elementum
                  nulla tempor, semper dui. Pellentesque habitant morbi
                  tristique senectus. Lorem ipsum dolor sit amet, consectetur
                  adipiscinga dui. Pellentesque habitant morbi tristique
                  senectus.
                  <img
                    src="/images/home/vector.svg"
                    className="absolute bottom-_17 left-20"
                  />
                </div>
                <div className="flex">
                  <img src="/images/home/slider.svg" />
                  <div className="ml-35">
                    <div className="text-18 font-display text-blue font-display">
                      Patrick Lindbark
                    </div>
                    <div className="text-16 font-display text-light-grey">
                      Expert
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-sm h-200 text-base">
                <div className="shadow mx-20 mb-38 text-base text-black p-35 relative">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam et nisl dignissim, elementum nulla tempor, semper dui.
                  Pellentesque habitant morbi tristique senectus. Lorem ipsum
                  dolor sit amet, consectetur adipiscnisl dignissim, elementum
                  nulla tempor, semper dui. Pellentesque habitant morbi
                  tristique senectus. Lorem ipsum dolor sit amet, consectetur
                  adipiscinga dui. Pellentesque habitant morbi tristique
                  senectus.
                  <img
                    src="/images/home/vector.svg"
                    className="absolute bottom-_17 left-20"
                  />
                </div>
                <div className="flex">
                  <img src="/images/home/slider.svg" />
                  <div className="ml-35">
                    <div className="text-18 font-display text-blue font-display">
                      Patrick Lindbark
                    </div>
                    <div className="text-16 font-display text-light-grey">
                      Expert
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-sm h-200 text-base">
                <div className="shadow mx-20 mb-38 text-base text-black p-35 relative">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam et nisl dignissim, elementum nulla tempor, semper dui.
                  Pellentesque habitant morbi tristique senectus. Lorem ipsum
                  dolor sit amet, consectetur adipiscnisl dignissim, elementum
                  nulla tempor, semper dui. Pellentesque habitant morbi
                  tristique senectus. Lorem ipsum dolor sit amet, consectetur
                  adipiscinga dui. Pellentesque habitant morbi tristique
                  senectus.
                  <img
                    src="/images/home/vector.svg"
                    className="absolute bottom-_17 left-20"
                  />
                </div>
                <div className="flex">
                  <img src="/images/home/slider.svg" />
                  <div className="ml-35">
                    <div className="text-18 font-display text-blue font-display">
                      Patrick Lindbark
                    </div>
                    <div className="text-16 font-display text-light-grey">
                      Expert
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-sm h-200 text-base">
                <div className="shadow mx-20 mb-38 text-base text-black p-35 relative">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam et nisl dignissim, elementum nulla tempor, semper dui.
                  Pellentesque habitant morbi tristique senectus. Lorem ipsum
                  dolor sit amet, consectetur adipiscnisl dignissim, elementum
                  nulla tempor, semper dui. Pellentesque habitant morbi
                  tristique senectus. Lorem ipsum dolor sit amet, consectetur
                  adipiscinga dui. Pellentesque habitant morbi tristique
                  senectus.
                  <img
                    src="/images/home/vector.svg"
                    className="absolute bottom-_17 left-20"
                  />
                </div>
                <div className="flex">
                  <img src="/images/home/slider.svg" />
                  <div className="ml-35">
                    <div className="text-18 font-display text-blue font-display">
                      Patrick Lindbark
                    </div>
                    <div className="text-16 font-display text-light-grey">
                      Expert
                    </div>
                  </div>
                </div>
              </div>
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
