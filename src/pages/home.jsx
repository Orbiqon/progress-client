import React, { useState } from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import { staticDataService } from 'api';
import { useFetch } from 'hooks';
import { EntryPoint } from 'components/Modal';

function Home() {
  const { data, status } = useFetch(staticDataService, {
    variables: `home`,
  });
  const [element = {}] = data || [];
  const { acf = {} } = element;

  const {
    heading,
    description,
    section = [],
    bottom_description,
    section_image,
  } = acf;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <>
          <div className="pt-129 sm:pt-86 sm:mx-20 mb-113 max-w-lg m-auto px-100 sm:px-0 lg:px-50 mb-206">
            <div className="flex justify-center pb-56">
              <img
                src="images/logo/logo_animation1.gif"
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
          <div className="w-74% bg-gradient-blue rounded-r-md sm:pl-20 sm:mr-0 relative sm:rounded-r-md h-auto pb-20 sm:h-auto sm:w-95%">
            <div className="max-w-lg m-auto px-100 lg:px-0 sm:px-0">
              <img
                src={section_image}
                className="max-w-484 rounded sm:rounded-l-sm absolute sm:top-_70 lg:right-_190 lg:w-50% md:w-50% md:h-36% sm:w-58% sm:right-_20 top-85 right-_190 w-50% "
              />
              <div className=" max-w-lg m-auto px-100 sm:px-0 sm:w-100% w-100% pt-80 flex">
                <div className="w-70% sm:w-100% lg:w-100% sm:pt-173 sm:pb-15 grid grid-cols-2 sm:block">
                  {section.map((element) => (
                    <div className="w-90% sm:w-100% mt-8 sm:flex">
                      <div className="w-25% sm:w-auto flex">
                        <img
                          src={
                            element.logo
                              ? element.logo
                              : 'images/home/principle1.svg'
                          }
                          className="m-auto"
                        />
                      </div>

                      <div className="sm:mx-20 sm:mt-10 mt-36 lg:max-w-187 sm:w-50%">
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
            <Button
              value="Start Making Progress"
              color="green"
              width="200"
              height="66"
              onClick={() => setOpen(true)}
            />
          </div>
        </>
      </Container>
      <EntryPoint open={open} setOpen={setOpen} />
    </>
  );
}

export default Home;
