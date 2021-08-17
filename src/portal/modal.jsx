import React from 'react';
import ReactDOM from 'react-dom';

function modal({ children }) {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById('modal-root')
  );
}

export default modal;
