import React, { useState, useEffect } from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import { TextField } from 'components/Form';
import { Modal } from 'components/Modal';
import { useFormik } from 'formik';
import { genrateSchema } from 'validation';
import { usePost } from 'hooks';
import { signInService, attemptService } from 'api';
import { Link, Router, useHistory } from 'react-router-dom';
import { LINKS } from 'utils';

function InitDataCollect({ open, setOpen, ...props }) {
  const { HEALTH_SCORE } = LINKS;

  const [initialValues, setInitialValues] = useState({
    email: '',
    phone: '',
  });
  const [signIn, { data, status }] = usePost(signInService);
  const [attempt, { data: dataAttempt, status: statusAttempt }] = usePost(
    attemptService
  );

  let history = useHistory();

  useEffect(() => {
    if (dataAttempt) {
      history.push({
        pathname: HEALTH_SCORE,
        // search: '/score',
        state: { data: JSON.stringify(dataAttempt) },
      });
    }
  }, [dataAttempt]);

  useEffect(() => {
    if (data && data.user) {
      props.submitResponse.user_id = data.user.id;
      attempt({ variables: props.submitResponse });
    }
    if (data && data.message) {
      alert(data.message);
    }
  }, [data]);

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
    onSubmit: (values) => {
      let { email, phone } = values;
      signIn({
        variables: {
          user: { email, phone },
        },
      });
    },

    validationSchema: genrateSchema(initialValues),
  });
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="pt-60 2xl:px-47">
        <div className="modal-heading 2xl:mx-20 mb-20 sm:mx-40">
          Lorem ipsum derset dolor sit amet
        </div>
        <div className="content text-center 2xl:mx-20 mb-30 sm:ml-46 sm:mr-43">
          Lorem ipsum dolor sit amet, consecteturlorem ipsumipiscing elit
        </div>
        <div className="mb-20">
          <TextField
            border="border"
            icon="email"
            height="59"
            indent="59"
            name="email"
            placeholder="Email"
            type="text"
            onChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            error={errors.email}
          />
        </div>
        <div className="mb-40">
          <TextField
            border="border"
            icon="phone"
            height="59"
            indent="59"
            name="phone"
            placeholder="phone"
            type="number"
            onChange={handleChange}
            handleBlur={handleBlur}
            value={values.phone}
            error={errors.phone}
          />
        </div>
        <div className="flex justify-center 2xl:pb-80">
          <Button
            value="confirm"
            color="green"
            width="200"
            height="66"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </Modal>
  );
}

export default InitDataCollect;
