import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal as ModalReact } from 'react-responsive-modal';

function Modal({ children, open, setOpen }) {
  const bg = {
    overlay: {
      background: 'transparent',
    },
  };
  return (
    <ModalReact
      open={open}
      onClose={() => setOpen(false)}
      styles={bg}
      showCloseIcon={false}
      classNames={{
        modal: 'sm:w-100% 2xl:w-40% modal',
      }}
      center
    >
      {children}
    </ModalReact>
  );
}

export default Modal;
