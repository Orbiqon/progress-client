import React from 'react';
import { Container } from 'Layout';
import { MobileForm } from 'components/Form';
import { Button } from 'components/Button';
import { staticDataService } from 'api';
import { useFetch } from 'hooks';

function Home() {
  const { data, status } = useFetch(staticDataService, {
    variables: `home`,
  });
  
  const [element={}]=data||[]
  const {acf={}}=element
  
  const {
    heading,
    description,
    section = [],
    bottom_description
  } = acf

  return (
    <Container>
      <>
        <div className="2xl:pt-129 sm:pt-86 sm:mx-20 mb-113 2xl:max-w-lg 2xl:m-auto 2xl:px-100 2xl:mb-206">
          <div className="flex justify-center pb-56">
            <img
              src="images/logo/logo-verticle.svg"
              className="2xl:w-500 2xl:h-272"
            />
          </div>
          <div className="heading 2xl:text-47 pb-20">{heading}</div>
          <div className="2xl:flex 2xl:justify-center content text-center sm:mb-40 mx-10">
            <span className="2xl:w-70% 2xl:text-18">{description}</span>
          </div>
        </div>
        <div className="2xl:w-100% bg-gradient-green sm:pl-20 sm:mr-20 relative sm:rounded-r-md 2xl:h-819">
          <div className="2xl:max-w-lg 2xl:m-auto 2xl:px-100">
            <img
              src="images/home/principle.svg"
              className=" sm:rounded-l-sm absolute sm:top-_70 sm:w-100% sm:right-_20 2xl:top-85 2xl:right-11 2xl:w-67% 2xl:h-637"
            />
            <div className="  2xl:absolute 2xl:top-_30 sm:w-100% 2xl:w-70%  2xl:flex">
              <div className="2xl:w-50% sm:pt-315 sm:pb-15 grid grid-cols-2 sm:block">

                {section.map( element => (
                  <div className="2xl:w-90% mt-8">
                    <div className="w-25%">
                      <img src={ element.logo ? element.logo : "images/home/principle1.svg"} />
                    </div>

                    <div className="sm:mx-20 sm:mt-10 2xl:mt-36">
                      <div className="footer-label font-bold">
                      {element.title}
                      </div>
                      <div className="label my-10 text-white">
                        {element.description}
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="sm:flex  2xl:w-100% sm:pt-315">
                  <div className="w-38%">
                    <img src="images/home/principle1.svg" />
                  </div>

                  <div className="sm:mx-20 sm:mt-10 2xl:mt-36">
                    <div className="footer-label font-bold">
                    {section_title_one}
                    </div>
                    <div className="label my-10 text-white">
                      {section_description_one}
                    </div>
                  </div>
                </div>
                <div className="sm:flex  2xl:w-100% 2xl:mt-56">
                  <div className="w-38%">
                    <img src="images/home/principle2.svg" />
                  </div>

                  <div className="sm:mx-20 sm:mt-10 2xl:mt-36">
                    <div className="footer-label font-bold">
                    {section_title_two}
                    </div>
                    <div className="label my-10 text-white">
                      {section_description_two}
                    </div>
                  </div>
                </div>
                <div className="sm:flex  2xl:w-100% 2xl:mt-56">
                  <div className="w-38%">
                    <img src="images/home/principle3.svg" />
                  </div>

                  <div className="sm:mx-20 sm:mt-10 2xl:mt-36">
                    <div className="footer-label font-bold">
                    {section_title_three}

                    </div>
                    <div className="label mt-10 text-white sm:pb-20 2xl:pb-80">
                      {section_description_three}
                    </div>
                  </div>
                </div> */}
              </div
              {/* <div className="2xl:ml-100 2xl:w-20%"> */}
                {/* <div className="sm:flex  2xl:w-100% ">
                  <div className="w-38%">
                    <img src="images/home/principle2.svg" />
                  </div>

                  <div className="sm:mx-20 sm:mt-10 2xl:mt-36">
                    <div className="footer-label font-bold">
                    {section_title_four}
                    </div>
                    <div className="label my-10 text-white">
                    {section_description_four}

                    </div>
                  </div>
                </div>
                <div className="sm:flex  2xl:w-100% 2xl:mt-56">
                  <div className="w-38%">
                    <img src="images/home/principle3.svg" />
                  </div>

                  <div className="sm:mx-20 sm:mt-10 2xl:mt-36">
                    <div className="footer-label font-bold">
                    {section_title_five}

                    </div>
                    <div className="label mt-10 text-white pb-80">
                      {section_description_five}
                    </div>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="2xl:justify-center flex 2xl:mt-87 2xl:mb-62">
          <div className=" 2xl:w-50% flex justify-center content text-center sm:mt-80 sm:mx-22 sm:mb-40">
            {bottom_description}
          </div>
        </div>
        <div className="flex justify-center 2xl:pb-106 sm:pb-80">
          <Button value="Lorem ipsum" color="green" width="200" height="66" />
        </div>
      </>
    </Container>
  );
}

export default Home;
