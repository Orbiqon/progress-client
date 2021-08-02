import React from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';
import { Button } from 'components/Button';

function Home() {
  return (
    <Container>
      <>
        <div className="2xl:pt-129 sm:pt-60 mx-20 mb-113">
          <div className="flex justify-center pb-56">
            <img
              src="images/logo/logo-verticle.svg"
              className="2xl:w-500 2xl:h-272"
            />
          </div>
          <div className="heading 2xl:text-47 pb-20">
            Lorem ipsum dolor sit amet
          </div>
          <div className="2xl:flex 2xl:justify-center content text-center mb-40 mx-10">
            <span className="2xl:w-50% 2xl:text-18">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              lacinia ex, vitae scelerisque nisl. Sed ac velit sit amet odio
              rutrum dignissim sed ac felis. Mauris convallis magna lectus, id
              blandit metus volutpat non.
            </span>
          </div>
        </div>
        <div className="bg-gradient-green pl-20 mr-20 relative rounded-r-md">
          <div className="bg-white h-305 shadow-sm rounded-l-sm absolute top-_70 w-100%">
            <img
              src="images/logo/logo-icon.svg"
              className="absolute bottom-_30 right-40"
            />
          </div>

          <div className="flex pb-34 pt-315">
            <div className="w-38%">
              <img src="images/principle.svg" />
            </div>

            <div className="mx-20 mt-3">
              <div className="footer-label font-bold">Principl 1</div>
              <div className="label my-10 text-white">
                Lorem Ipsum has been the industry’ standard dummy text ever
                since the 1500s, when an unk
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-38%">
              <img src="images/principle.svg" />
            </div>

            <div className="mx-20 mt-3">
              <div className="footer-label font-bold">Principl 2</div>
              <div className="label my-10 text-white">
                Lorem Ipsum has been the industry’ standard dummy text ever
                since the 1500s, when an unk
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-38%">
              <img src="images/principle.svg" />
            </div>

            <div className="mx-20 mt-3">
              <div className="footer-label font-bold">Principl 3</div>
              <div className="label mt-10 text-white pb-80">
                Lorem Ipsum has been the industry’ standard dummy text ever
                since the 1500s, when an unk
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center content text-center mt-80 mx-30 mb-40">
          <span className="w-50%">
            Our unique health questionnaire is designed to give you a view of
            the state of your health as you are feeling today. Our programme is
            designed around everything your body needs to help you optimise your
            health. The results are emailed to you to give you an overview of
            your key areas to improve
          </span>
        </div>
        <div className="flex justify-center pb-80">
          <Button value="Lorem ipsum" color="green" width="200" height="66" />
        </div>
      </>
    </Container>
  );
}

export default Home;
