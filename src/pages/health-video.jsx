import React, { useState } from 'react';
import { Modal } from 'components/Modal';
import { VideoCard } from 'components/VideoCard';

function Complete({ open, setOpen }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <VideoCard />
    </Modal>
  );
}

export default Complete;
