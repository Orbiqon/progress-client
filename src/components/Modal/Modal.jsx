import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal as ModalReact } from 'react-responsive-modal';

function Modal({
  children,
  open,
  setOpen,
  height = '100vh',
  display = 'block',
}) {
  const bg = {
    overlay: {
      background: 'transparent',
    },

    background: 'transparent',
  };
  return (
    <ModalReact
      open={open}
      onClose={() => setOpen(false)}
      styles={bg}
      showCloseIcon={false}
      classNames={{
        modal: 'sm:w-100% sm:h-100% w-40% lg:w-50%  modal',
      }}
      center
    >
      <div className={`bg-white w-fit  ${display} sm:h-${height}`}>
        {children}
      </div>
    </ModalReact>
  );
}

export default Modal;
