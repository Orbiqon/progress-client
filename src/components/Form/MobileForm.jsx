import React, { useState, useEffect } from 'react';
import { TextField } from 'components/Form';
import { Button } from 'components/Button';
import { usePost } from 'hooks';
import { contactFormService } from 'api/api-services';
import { useFormik } from 'formik';
import { genrateSchema } from 'validation';
import ReCAPTCHA from 'react-google-recaptcha';

// load('6LczEPUcAAAAABl38N3maKpsl0g2Ts9I1DUSQC_A').then((recaptcha) => {
//   recaptcha.execute('<action>').then((token) => {
//     console.log(token); // Will print the token
//   });
// });

function Form({ title, description }) {
  const [post, { data: dataPost, status: statusPost }] = usePost(
    contactFormService
  );
  const [disable, setDisable] = useState(true);
  const [actions, setActions] = useState();
  const [dataSubmit, setDataSubmit] = useState();

  const [initialValues, setInitialValues] = useState({
    email: '',
    phone: '',
    message: '',
    name: '',
  });

  useEffect(() => {
    if (dataPost) {
      actions.resetForm();
      setDataSubmit(dataPost);
      setTimeout(() => setDataSubmit(), 30000);
    }
  }, [dataPost]);

  function onChange(value) {
    setDisable(false);
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      let { email, phone, message, name } = values;
      post({
        variables: {
          email,
          phone,
          message,
          name,
        },
      });
      setActions(actions);
    },

    validationSchema: genrateSchema(initialValues),
  });

  const fbClick = () => {
    window.FB.CustomerChat.showDialog();
  };

  return (
    <div className="">
      <div className="font-display text-blue text-lg text-center sm:text-lg text-2xl font-medium pb-20">
        {title}
      </div>
      <div className="mx-20 mb-40 sm:mb-80 font-display text-center text-dark-grey text-base flex justify-center">
        <span className="w-50% sm:w-100% text-16">{description}</span>
      </div>
      <div
        onClick={() => fbClick()}
        className="cursor-pointer pt-40 pb-15 flex flex-col items-center bg-grey-white sm:mx-20 rounded-t"
      >
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
                icon="name"
                height="59"
                indent="59"
                ml="70"
                name="name"
                placeholder="Name"
                type="text"
                onChange={handleChange}
                handleBlur={handleBlur}
                value={values.name}
                error={errors.name}
              />
            </div>
            <div className="pb-20">
              <TextField
                icon="email"
                height="59"
                indent="59"
                ml="70"
                name="email"
                placeholder="Email"
                type="text"
                onChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
                error={errors.email}
              />
            </div>
            <div className="pb-20">
              <TextField
                icon="phone"
                height="59"
                indent="59"
                ml="70"
                name="phone"
                placeholder="Phone"
                type="text"
                onChange={handleChange}
                handleBlur={handleBlur}
                value={values.phone}
                error={errors.phone}
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
              name="message"
              placeholder="Message"
              type="text"
              element="textarea"
              onChange={handleChange}
              handleBlur={handleBlur}
              value={values.message}
              error={errors.message}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-40">
          <div className=" text-white pb-20">{dataSubmit && dataSubmit}</div>
          <ReCAPTCHA
            sitekey="6LfbEg0dAAAAAAOew7rr_KeodWHzY_bN3usYkzKS"
            onChange={onChange}
          />
          <Button
            width="200"
            height="66"
            DeWidth="200"
            DeHeight="66"
            color="blue"
            value="Send request"
            onClick={handleSubmit}
            disabled={disable}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
