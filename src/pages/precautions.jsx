import React from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';

function Precautions() {
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
          <div className="sm:mx-20 sm:mb-113 2xl:w-50% 2xl:ml-173 ">
            <div className="sub-heading text-blue sm:text-center pb-20 ">
              Lorem ipsum dolor sit amet
            </div>
            <div className="content sm:text-center 2xl:w-50%">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              lacinia ex, vitae scelerisque nisl. Sed ac velit sit amet odio
              rutrum dignissim sed ac felis. Mauris convallis magna lectus, id
              blandit metus volutpat non. Quisque bibendum libero bibendum,
              malesuada libero id, tristique nisl. Sed faucibus placerat libero
              bibendum, malesuada libero id, tristique nisl. Sed faucibus
              placerat
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
        <div></div>
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
