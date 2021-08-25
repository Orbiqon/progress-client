import React from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';
import { Button } from 'components/Button';
import { BookCallVideo } from 'components/BookCallVideo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/Arrow/arrow';

function Overview() {
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
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
  };

  const techs = [
    {
      image: '/images/overview/tech1.svg',
      description:
        'Once we are ready to begin we will send you your welcome pack in the post with everything you need to get going',
    },
    {
      image: '/images/overview/tech2.svg',
      description:
        'You will receive a fitness band, a glucose monitor, blood pressure monitor, smart scales and much more.',
    },
    {
      image: '/images/overview/tech3.svg',
      description:
        'By tracking your progress daily we can adjust and course correct as we go. Our health professionals will monitor your health dashboard weekly and be able to contact you via our messaging app to help give you advice and feedback as often as required.',
    },
  ];
  return (
    <Container>
      <>
        <div className="pt-60 sm:mx-20 mb-100 sm:mb-40 2xl:max-w-lg 2xl:m-auto 2xl:px-100">
          <div className="2xl:flex w-100% 2xl:justify-between">
            <div className="sm:w-100% 2xl:w-40%">
              <div className="heading text-left pb-20">Programme overview</div>
              <div className="content mb-40 2xl:text-18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac lacinia ex, vitae scelerisque nisl. Sed ac velit sit amet
                odio rutrum dignissim sed ac felis. Mauris convallis magna
                lectus, id blandit metus volutpat non.
              </div>
              <div className="sm:invisible pb-60">
                <Button
                  value="Start making progress"
                  color="blue"
                  width={200}
                  height={66}
                  DeWidth="200"
                  DeHeight="66"
                />
              </div>
              <div className="sm:invisible 2xl:ml-10">
                <img src="/images/scroll-down.svg" />
              </div>
            </div>
            <picture>
              <source
                media="(min-width:651px)"
                srcset="images/overview/card-header.svg"
              />
              <source
                media="(max-width:650px)"
                srcset="images/overview/card-header-mbl.svg"
              />
              <img className="m-auto" src="images/overview/card-header.svg" />
            </picture>
          </div>
          <div className="2xl:flex w-100% sm:flex sm:flex-col-reverse 2xl:mt-120">
            <picture>
              <source
                media="(min-width:651px)"
                srcset="images/overview/question.svg"
              />
              <source
                media="(max-width:650px)"
                srcset="images/overview/question-mbl.svg"
              />
              <img className="m-auto" src="images/overview/question.svg" />
            </picture>
            <div className="2xl:pl-100 sm:w-100% 2xl:w-50% sm:pt-20 2xl:mt-80">
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
              <div className="sub-heading 2xl:text-36 text-blue pb-20">
                Take our Free Health Questionnaire
              </div>
              <div className="content 2xl:text-16">
                Our unique health questionnaire is designed to give you a view
                of the state of your health as you are feeling today. Our
                programme is designed around everything your body needs to help
                you optimise your health. The results are emailed to you to give
                you an overview of your key areas to improve
              </div>
            </div>
          </div>
        </div>
        <section className="2xl:mt-100 sm:pb-80">
          <BookCallVideo />
        </section>
        <div className="flex font-display text-white mt-160 mb-120">
          <div className="2xl:mt-168 bg-gradient-blue rounded-r-md pt-515 w-50% relative">
            <div className="slider5 absolute w-80% right-0 top-_78 ">
              <Slider {...settings1}>
                <img src="/images/overview/slider/pic1.jpg" className="w--80" />
                <img src="/images/overview/slider/pic1.jpg" className="w--80" />
                <img src="/images/overview/slider/pic1.jpg" className="w--80" />
              </Slider>
            </div>
            <img
              src="/images/overview/step3.svg"
              className="absolute right-_518"
            />
            <div className="max-w-md m-auto ">
              <div className="pt-60">
                <Button
                  value="step 4"
                  color="green"
                  width="70"
                  height="32"
                  DeWidth="92"
                  DeHeight="46"
                />
              </div>
              <div className="2xl:text-36 font-medium my-20">
                Set up all your tech
              </div>
              <div className="2xl:text-16 2xl:mb-60 ">
                If you are interested to learn more you can watch a video
                explaining the programme and who it is deigned for. At this
                point you can book a free, no obligation call with one of our
                team to talk through your unique needs and see whether we can
                help you make progress with your health. We HATE hard sales
                pitches so this call will simply be a chance for you to ask more
                questions and learn how the programme could be tailored to help
                you.
              </div>
              <div className="2xl:mb-160">
                {techs.map((item) => (
                  <div className="2xl:flex ">
                    <img src={item.image} className="self-start" />
                    <div className="2xl:text-base 2xl:ml-30 mb-30 2xl:w-370">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="2xl:mx-70 w-40%">
            <div className="pb-10">
              <Button
                value="step 3"
                color="green"
                width="70"
                height="32"
                DeWidth="92"
                DeHeight="46"
              />
            </div>
            <div className="sub-heading 2xl:text-36 text-blue pb-20 w-253">
              Get Your DNA sequenced
            </div>
            <div className="content 2xl:text-16 2xl:w-370">
              If our health programme works for you we will send you a DNA
              collection kit in the post. This is a simple tube where we ask you
              for a sample of your Saliva to send to our DNA sequencing lab for
              processing. This is done to help us tailor the programme to your
              individual DNA. Since we are all unique our programme and
              ecommendations are different for every single person. We believe
              this is future of personalised health care.
            </div>
          </div>
        </div>
        <div className="mx-20 2xl:flex 2xl:flex-row-reverse 2xl:max-w-lg 2xl:m-auto 2xl:px-10">
          <div className="2xl:pl-100 2xl:w-50% ">
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
            <div className="sub-heading 2xl:text-36 text-blue pb-20 2xl:w-50%">
              Start making progress!
            </div>
            <div className="2xl:w-70% content sm:pb-40 2xl:text-16">
              Our health programme is designed to help you make progress in all
              aspects of your health. We will help you every step of the way and
              have video calls every 2 weeks to give you feedback and track
              progress. We send you regular reports on how you are doing and
              help teach you about YOUR body and YOUR DNA to give you
              information that will last a lifetime.
            </div>
          </div>
          <picture>
            <source
              media="(min-width:651px)"
              srcset="images/overview/weight.svg"
            />
            <source
              media="(max-width:650px)"
              srcset="images/overview/weight-mbl.svg"
            />
            <img className="m-auto" src="images/overview/weight.svg" />
          </picture>
        </div>
        <div className="bg-gradient-green 2xl:flex 2xl:justify-between 2xl:mt-129 mt-28 sm:pt-80 2xl:py-60 mb-100">
          <div className="2xl:max-w-lg 2xl:m-auto 2xl:px-100 2xl:flex 2xl:justify-between">
            <div className="2xl:w-70%">
              <div className="sub-heading 2xl:text-36 text-white sm:text-center sm:mx-40 mb-20">
                Lorem ipsum omipt dolor sit amet, consectetur
              </div>
              <div className="footer-label 2xl:text-16 sm:text-center sm:mx-20 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et nisl dignissim, elementum nulla tempor, semper dui.
                Pellentesque habitant morbi tristique senectu
              </div>
            </div>
            <div className=" sm:pt-40 sm:pb-80 flex justify-center mt-36">
              <Button
                value="Start making progress"
                color="blue"
                width="200"
                height="66"
                DeWidth="200"
                DeHeight="66"
              />
            </div>
          </div>
        </div>
        <div className="slider1">
          <Slider {...settings} className="m-100">
            <div className="rounded-sm h-200 text-base">
              <div className="shadow mx-20 mb-38 text-base text-black p-35 relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et nisl dignissim, elementum nulla tempor, semper dui.
                Pellentesque habitant morbi tristique senectus. Lorem ipsum
                dolor sit amet, consectetur adipiscnisl dignissim, elementum
                nulla tempor, semper dui. Pellentesque habitant morbi tristique
                senectus. Lorem ipsum dolor sit amet, consectetur adipiscinga
                dui. Pellentesque habitant morbi tristique senectus.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et nisl dignissim, elementum nulla tempor, semper dui.
                Pellentesque habitant morbi tristique senectus. Lorem ipsum
                dolor sit amet, consectetur adipiscnisl dignissim, elementum
                nulla tempor, semper dui. Pellentesque habitant morbi tristique
                senectus. Lorem ipsum dolor sit amet, consectetur adipiscinga
                dui. Pellentesque habitant morbi tristique senectus.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et nisl dignissim, elementum nulla tempor, semper dui.
                Pellentesque habitant morbi tristique senectus. Lorem ipsum
                dolor sit amet, consectetur adipiscnisl dignissim, elementum
                nulla tempor, semper dui. Pellentesque habitant morbi tristique
                senectus. Lorem ipsum dolor sit amet, consectetur adipiscinga
                dui. Pellentesque habitant morbi tristique senectus.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et nisl dignissim, elementum nulla tempor, semper dui.
                Pellentesque habitant morbi tristique senectus. Lorem ipsum
                dolor sit amet, consectetur adipiscnisl dignissim, elementum
                nulla tempor, semper dui. Pellentesque habitant morbi tristique
                senectus. Lorem ipsum dolor sit amet, consectetur adipiscinga
                dui. Pellentesque habitant morbi tristique senectus.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et nisl dignissim, elementum nulla tempor, semper dui.
                Pellentesque habitant morbi tristique senectus. Lorem ipsum
                dolor sit amet, consectetur adipiscnisl dignissim, elementum
                nulla tempor, semper dui. Pellentesque habitant morbi tristique
                senectus. Lorem ipsum dolor sit amet, consectetur adipiscinga
                dui. Pellentesque habitant morbi tristique senectus.
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
        <div className="2xl:max-w-lg 2xl:m-auto 2xl:px-100">
          <div className="mb-_40 mt-80 ">
            <MobileForm />
          </div>
        </div>
      </>
    </Container>
  );
}

export default Overview;
