import React, { useState } from 'react';
import { Container } from 'Layout';
import { Button } from 'components/Button';
import { TextField } from 'components/Form';
import { Modal } from 'components/Modal';

function InitDataCollect({ open, setOpen }) {
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
        <div className="flex justify-center 2xl:pb-80">
          <Button value="confirm" color="green" width="200" height="66" />
        </div>
      </div>
    </Modal>
  );
}

export default InitDataCollect;
