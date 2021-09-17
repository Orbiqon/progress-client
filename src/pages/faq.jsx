import React, {useState} from 'react';
import { Container } from 'Layout';
import { Box } from 'components/Box';
import { MobileForm } from 'components/Form';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/Arrow/arrow';
import { staticDataService } from 'api';
import { useFetch } from 'hooks';
import { elastic } from 'react-burger-menu';

function Faq() {

  const [select, setSelect] = useState(0)
  const { data, status } = useFetch(staticDataService, {
    variables: `faq`,
  });

  const [element={}]=data||[]
  const {acf={}}=element
  const {heading, description, question_answers = [], slider = [], contact = {}} = acf
  const {heading : contact_heading, description: contact_description} = contact

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
          <div className="heading pb-13">{heading}</div>
          <div className="content 2xl:text-18 text-center sm:mb-40 2xl:mb-60">
            {description}
          </div>
          <div className="grid grid-cols-2 sm:block">
          
            {
              question_answers.map((element,index) => (
                <div className="2xl:mr-30 " >
                  <Box onClick={() => setSelect(index)} heading={element.question} detail={select == index && element.answer }/>
                </div>
              ))
            }
          </div>
        </div>
        <div className="bg-gradient-light-blue 2xl:mt-100 px-20 pt-40 pb-20">
          <div className="slider3 2xl:max-w-lg 2xl:m-auto 2xl:px-100">
            <Slider {...settings1} className="mb-100">
              {slider.map((element) => (
                <div className="rounded-sm  w-370 text-base">
                  <img
                    src={ element.image ? element.image : "/images/support/slider-pic.jpeg"}
                    className="w-370"
                  />

                  <div className="sm:98% 2xl:w-270 rounded-lg py-20  relative">
                    <div className="bg-white p-20 rounded-lg">
                      {element.comment}
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
            <MobileForm title={contact_heading} description={contact_description} />
          </div>
        </div>
      </>
    </Container>
  );
}

export default Faq;
