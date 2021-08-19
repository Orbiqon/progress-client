import React from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';
import { BookCallVideo } from 'components/BookCallVideo';

function LearnMore() {
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
        <div className="flex">
          <div className="bg-gradient-blue rounded-r-md ">hghgh</div>
          <div>
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
