import React, { useState } from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import { staticDataService } from 'api';
import { useFetch } from 'hooks';

function Home() {
  const { data, status } = useFetch(staticDataService, {
    variables: `home`,
  });
  const [element = {}] = data || [];
  const { acf = {} } = element;

  const { heading, description, section = [], bottom_description } = acf;

  return (
    <>
      <Container>
        <>
          <div className="pt-129 sm:pt-86 sm:mx-20 mb-113 max-w-lg m-auto px-100 sm:px-0 lg:px-50 mb-206">
            <div className="flex justify-center pb-56">
              <img
                src="images/logo/progress.gif"
                className="w-500 h-272 sm:object-contain"
                loop="1"
              />
            </div>
            <div className="heading text-47 sm:text-heading pb-20">
              {heading}
            </div>
            <div className="flex justify-center content text-center sm:mb-40 mx-10">
              <span className="w-70% text-18 sm:w-100% sm:text-base">
                {description}
              </span>
            </div>
          </div>
          <div className="w-100% bg-gradient-green sm:pl-20 sm:mr-0 relative sm:rounded-r-md h-819 sm:h-1550 sm:w-95%">
            <div className="max-w-lg m-auto px-100 sm:px-0">
              <img
                src="images/home/principle.png"
                className=" sm:rounded-l-sm absolute sm:top-_70 lg:w-auto lg:right-0 md:w-50% sm:w-95% sm:right-_20 top-85 right-11 w-50% "
              />
              <div className="  absolute top-_30 sm:w-100% w-70%  flex">
                <div className="w-50% sm:pt-315 sm:pb-15 grid grid-cols-2 sm:block">
                  {section.map((element) => (
                    <div className="w-90% mt-8">
                      <div className="w-25%">
                        <img
                          src={
                            element.logo
                              ? element.logo
                              : 'images/home/principle1.svg'
                          }
                        />
                      </div>

                      <div className="sm:mx-20 sm:mt-10 mt-36">
                        <div className="footer-label font-bold">
                          {element.title}
                        </div>
                        <div className="label my-10 text-white">
                          {element.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center flex mt-87 sm:mt-0 mb-62 sm:mb-0">
            <div className=" w-50% sm:w-100% flex justify-center content text-center sm:mt-80 sm:mx-22 sm:mb-40">
              {bottom_description}
            </div>
          </div>
          <div className="flex justify-center pb-106 sm:pb-80">
            <Button value="Lorem ipsum" color="green" width="200" height="66" />
          </div>
        </>
      </Container>
    </>
  );
}

export default Home;
