import React from 'react';
import { TextField } from 'components/Form';
import { Button } from 'components/Button';
import { load } from 'recaptcha-v3';

load('6LczEPUcAAAAABl38N3maKpsl0g2Ts9I1DUSQC_A').then((recaptcha) => {
  recaptcha.execute('<action>').then((token) => {
    console.log(token); // Will print the token
  });
});

function Form({ title, description }) {
  return (
    <div className="">
      <div className="font-display text-blue text-lg text-center sm:text-lg text-2xl font-medium pb-20">
        {title}
      </div>
      <div className="mx-20 mb-40 sm:mb-80 font-display text-center text-dark-grey text-base flex justify-center">
        <span className="w-50% sm:w-100% text-16">{description}</span>
      </div>
      <div className="pt-40 pb-15 flex flex-col items-center bg-grey-white sm:mx-20 rounded-t">
        <img src="images/facebook/fb-logo.svg" />
        <div className=" font-display text-sm text-blue">Facebook chat</div>
      </div>
      <div className="relative bg-grey-white flex items-center text-center sm:mx-20 px-15 label text-blue opacity-75 pb-20 or">
        or
      </div>

      <div className="relative  bg-gradient-green sm:mx-20 rounded-b-md">
        <div className="w-100% flex sm:flex-col justify-between">
          <div className="w-100%">
            <div className="pt-40 pb-20">
              <TextField
                placeholder="Name"
                icon="name"
                height="59"
                indent="59"
                ml="70"
              />
            </div>
            <div className="pb-20">
              <TextField
                placeholder="Email"
                icon="email"
                height="59"
                indent="59"
                ml="70"
              />
            </div>
            <div className="pb-20">
              <TextField
                placeholder="Phone"
                icon="phone"
                height="59"
                indent="59"
                ml="70"
              />
            </div>
          </div>
          <div className="pt-40 w-100% sm:pb-20">
            <TextField
              placeholder="Message"
              pb="115"
              dpb="173"
              pt="21"
              indent="20"
              ml="30"
              mr="70"
            />
          </div>
        </div>
        <div className="flex justify-center pb-40">
          <Button
            width="200"
            height="66"
            DeWidth="200"
            DeHeight="66"
            color="blue"
            value="Send request"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
