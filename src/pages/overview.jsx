import React from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';
import { Button } from 'components/Button';
import { BookCallVideo } from 'components/BookCallVideo';

function Overview() {
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
                <Button value="step 1" color="green" width="70" height="32" />
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
        <div></div>
        <div className="mx-20 ">
          <div className="pb-10">
            <Button value="step 3" color="green" width="70" height="32" />
          </div>
          <div className="sub-heading 2xl:text-36 text-blue pb-20">
            Get Your DNA Sequenced
          </div>
          <div className="content 2xl:text-16">
            Our unique health questionnaire is designed to give you a view of
            the state of your health as you are feeling today. Our programme is
            designed around everything your body needs to help you optimise your
            health. The results are emailed to you to give you an overview of
            your key areas to improve
          </div>
        </div>
        <div className="mx-20 mt-80 2xl:flex 2xl:flex-row-reverse 2xl:max-w-lg 2xl:m-auto 2xl:px-10">
          <div className="2xl:pl-100 2xl:w-50% ">
            <div className="pb-10 ">
              <Button value="step 5" color="green" width="70" height="32" />
            </div>
            <div className="sub-heading 2xl:text-36 text-blue pb-20 2xl:w-50%">
              Start making progress!
            </div>
            <div className="2xl:w-70% content pb-40 2xl:text-16">
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
        <div className="bg-gradient-green 2xl:flex 2xl:justify-between mt-28 sm:pt-80 2xl:py-60 mb-100">
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
              />
            </div>
          </div>
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
