import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal as ModalReact } from 'react-responsive-modal';

function Modal({
  children,
  open,
  setOpen,
  width = '100%',
  height = '100vh',
  display = 'block',
  content = 'block',
}) {
  const bg = {
    overlay: {
      background: 'transparent',
    },

    background: 'transparent',
    display: `display`,
  };
  return (
    <ModalReact
      open={open}
      onClose={() => setOpen(false)}
      styles={bg}
      showCloseIcon={false}
      // shouldCloseOnOverlayClick={true}
      classNames={{
        modal: `sm:w-${width} sm:h-100% w-40% lg:w-50%   modal ${content}`,
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
