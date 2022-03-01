import React, { useEffect, useState } from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';
import { Button } from 'components/Button';
import { BookCallVideo } from 'components/BookCallVideo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/Arrow/arrow';
import { staticDataService } from 'api';
import { EntryPoint } from 'components/Modal';
import { useFetch } from 'hooks';
import { BottomSlider } from 'components/Slider';

function Overview() {
  const [open, setOpen] = useState(false);

  const { data, status } = useFetch(staticDataService, {
    variables: `overview`,
  });

  const [element = {}] = data || [];
  const { acf = {} } = element;

  const {
    heading,
    description,
    header_image,
    step_1 = {},
    step_2 = {},
    step_3 = {},
    step_4 = {},
    step_5 = {},
    step_1_side_image,
    bottom_section = {},
    slider_1 = [],
    slider_2 = [],
    step_4_side_image,
    step_5_side_image,
    contact = {},
  } = acf;
  const { title: step_1_title, description: step_1_description } = step_1;
  const { title: step_2_title, description: step_2_description } = step_2;
  const { title: step_3_title, description: step_3_description } = step_3;
  const {
    title: step_4_title,
    description: step_4_description,
    sub_description = [],
  } = step_4;
  const { title: step_5_title, description: step_5_description } = step_5;
  const {
    heading: bottom_heading,
    description: bottom_description,
  } = bottom_section;
  const {
    heading: contact_heading,
    description: contact_description,
  } = contact;

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
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
    responsive: [
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 1.4,
        },
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <>
          <div className="pt-60 sm:mx-20 mb-100 sm:mb-40 max-w-lg m-auto px-100 sm:px-0">
            <div className="flex w-100% justify-between sm:flex-col">
              <div className="sm:w-100% w-40% lg:w-60% mr-100">
                <div className="heading text-left pb-20">{heading}</div>
                <div className="content mb-40 text-18">{description}</div>
                <div className="sm:hidden pb-60">
                  <Button
                    value="Start making progress"
                    color="blue"
                    width={200}
                    height={66}
                    DeWidth="200"
                    DeHeight="66"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <div className="sm:hidden ml-10">
                  <img src="/images/scroll-down.svg" />
                </div>
              </div>
              <div className="w-50% md:w-50% sm:w-100% mx-auto mt-120">
                <div className="relative mx-auto mr-_20">
                  <picture>
                    <source
                      media="(max-width:650px)"
                      srcset="images/overview/mbl-container.svg"
                    />
                    <img
                      className="h-100% w-100% relative "
                      src="images/overview/container.svg"
                    />
                  </picture>
                  <img
                    className="object-cover absolute left-45% sm:left-50% md:left-45% lg:bottom-80 md:bottom-80 sm:bottom-120 lg:rounded rounded-md transform-x bottom-120 h-90% w-70%"
                    // src="images/PROGRESS/overview1.jpg"
                    src={header_image}
                  />
                </div>
              </div>
              {/* <picture>
                <source
                  media="(min-width:651px)"
                  srcset="images/overview/card-header.svg"
                />
                <source
                  media="(max-width:650px)"
                  srcset="images/overview/card-header-mbl.svg"
                />
                <img className="m-auto" src="images/overview/card-header.svg" />
              </picture> */}
            </div>
            <div className="flex w-100% sm:flex sm:flex-col-reverse mt-120 sm:mt-0">
              <div className="w-50% md:w-50% sm:w-100% mx-auto mt-120">
                <div className="relative mx-auto ml-_20">
                  <picture>
                    <source
                      media="(max-width:650px)"
                      srcset="images/overview/mbl-container2.svg"
                    />
                    <img
                      className="h-100% w-100% relative "
                      src="images/overview/container2.svg"
                    />
                  </picture>
                  <img
                    className="object-cover bg-white absolute left-50% sm:left-50% md:left-50% lg:bottom-80 md:bottom-80 sm:bottom-120 lg:rounded rounded-md transform-x bottom-120 h-90% w-70%"
                    src={step_1_side_image}
                    // src="images/PROGRESS/programmeOverview.PNG"
                  />
                </div>
              </div>
              <div className="pl-100 sm:pl-0 sm:w-100% w-50% sm:pt-20 mt-80 sm:mt-20">
                <div className="pb-10">
                  <Button
                    value="step 1"
                    color="green"
                    width="70"
                    height="32"
                    DeWidth="92"
                    DeHeight="46"
                  />
                </div>
                <div className="sub-heading text-36 text-blue pb-20">
                  {step_1_title}
                </div>
                <div className="content text-16">{step_1_description}</div>
              </div>
            </div>
          </div>
          <section className="mt-100 sm:pb-80">
            <BookCallVideo heading={step_2_title} text={step_2_description} />
          </section>
          <div className="flex sm:flex-col-reverse font-display text-white sm:mt-0 mt-160 mb-120">
            <div className="mt-168 bg-gradient-blue rounded-r-md sm:pt-140 pt-305 w-50% sm:w-90% mr-20 relative">
              <div className="slider5 absolute w-80% sm:w-100% right-0 top-_78 ">
                <Slider {...settings1}>
                  {slider_1.map((item) => (
                    <img src={item.image} className="w--80 h-200" />
                  ))}
                  {/* <img
                    src="/images/PROGRESS/programmeOverview3.jpg"
                    className="w--80 h-200"
                  />
                  <img
                    src="/images/PROGRESS/programmeOverview3.jpg"
                    className="w--80 h-200"
                  />
                  <img
                    src="/images/PROGRESS/programmeOverview3.jpg"
                    className="w--80 h-200"
                  /> */}
                </Slider>
              </div>
              <picture>
                <source
                  media="(max-width:768px)"
                  // srcset="/images/PROGRESS/ProgrammeOverview4.jpg"
                  srcset={step_4_side_image}
                />
                <img
                  // src="/images/PROGRESS/ProgrammeOverview4.jpg"
                  src={step_4_side_image}
                  className="w-56% max-h-900 absolute right-_384 lg:left-455 md:right_75 sm:w-45% sm:right-_40 sm:bottom-_158  sm:left-auto"
                />
              </picture>

              <div className="max-w-md m-auto sm:mx-20">
                <div className="pt-60 md:pt-60 sm:pt-0">
                  <Button
                    value="step 4"
                    color="green"
                    width="70"
                    height="32"
                    DeWidth="92"
                    DeHeight="46"
                  />
                </div>
                <div className="text-36 sm:text-xl font-display font-medium sm:mb-20 sm:mt-10 my-20">
                  {step_4_title}
                </div>
                <div className="text-16 font-display sm:text-base  mb-60 ">
                  {step_4_description}
                </div>
                <div className="mb-160 sm:mt-40">
                  {sub_description.map((item) => (
                    <div className="flex ">
                      <img
                        src={item.logo}
                        // src="./images/home/principle1.svg"
                        className="self-start"
                      />
                      <div className="text-base sm:text-sm sm:ml-20 ml-30 mb-30 w-370">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mx-70 w-40% lg:mx-10 lg:w-20% sm:w-100% sm:mx-0">
              <div className="pb-10 sm:px-20 ">
                <Button
                  value="step 3"
                  color="green"
                  width="70"
                  height="32"
                  DeWidth="92"
                  DeHeight="46"
                />
              </div>
              <div className="sub-heading text-36 text-blue pb-20 w-253  sm:px-20 ">
                {step_3_title}
              </div>
              <div className="content text-16 w-370 sm:w-100% sm:pr-20 sm:px-20 ">
                {step_3_description}
              </div>
            </div>
          </div>
          <div className="mx-20 sm:pt-60 flex flex-row-reverse sm:flex-col max-w-lg m-auto">
            <div className="pl-100 w-50% lg:w-60% sm:w-100% sm:pl-0">
              <div className="pb-10 ">
                <Button
                  value="step 5"
                  color="green"
                  width="70"
                  height="32"
                  DeWidth="92"
                  DeHeight="46"
                />
              </div>
              <div className="sub-heading text-36 text-blue pb-20 lg:w-70% w-50% sm:w-100%">
                {step_5_title}
              </div>
              <div className="w-70% sm:w-100% content sm:pb-40 text-16">
                {step_5_description}
              </div>
            </div>
            <picture>
              <source
                media="(min-width:651px)"
                // srcset="images/PROGRESS/programmeOverview5.jpg"
                srcset={step_5_side_image}
              />
              <source
                media="(max-width:650px)"
                // srcset="images/PROGRESS/programmeOverview5.jpg"
                srcset={step_5_side_image}
              />
              <img
                className="m-auto max-w-420 w-100% rounded"
                src={step_5_side_image}
                // src="images/PROGRESS/programmeOverview5.jpg"
              />
            </picture>
          </div>
          <div className="bg-gradient-green flex justify-between mt-129 mt-28 sm:pt-80 py-60 mb-100">
            <div className="max-w-lg m-auto px-100 sm:px-0 sm:w-100% flex justify-between sm:flex-col">
              <div className="w-70% sm:w-100%">
                <div className="sub-heading text-36 text-white sm:text-center sm:mx-40 mb-20">
                  {bottom_heading}
                </div>
                <div className="footer-label text-16 sm:text-center sm:mx-20 ">
                  {bottom_description}
                </div>
              </div>
              <div className=" sm:pt-40 sm:pb-80 flex justify-center  mt-36">
                <Button
                  value="Start making progress"
                  color="blue"
                  width="200"
                  height="66"
                  DeWidth="200"
                  DeHeight="66"
                  onClick={() => setOpen(true)}
                />
              </div>
            </div>
          </div>
          <BottomSlider content={slider_2} />
          <div className="max-w-lg m-auto px-100 sm:px-0">
            <div className="mb-_40 mt-80 ">
              <MobileForm
                title={contact_heading}
                description={contact_description}
              />
            </div>
          </div>
        </>
      </Container>
      <EntryPoint open={open} setOpen={setOpen} />
    </>
  );
}

export default Overview;
