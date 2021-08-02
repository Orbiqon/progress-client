import React from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import { TextField } from 'components/Form';

function InitDataCollect() {
  return (
    <div className="mx-20">
      <div className="heading mx-20 mb-20">
        Lorem ipsum derset dolor sit amet
      </div>
      <div className="content mx-20 mb-30">
        Lorem ipsum dolor sit amet, consecteturlorem ipsumipiscing elit
      </div>
      <div className="mb-20">
        <TextField
          border="border"
          icon="email"
          placeholder="Email"
          height="59"
          indent="59"
        />
      </div>
      <div className="mb-40">
        <TextField
          border="border"
          icon="phone"
          placeholder="Enter your phone"
          height="59"
          indent="59"
        />
      </div>
      <div className="flex justify-center">
        <Button value="confirm" color="green" width="200" height="66" />
      </div>
    </div>
  );
}

export default InitDataCollect;
