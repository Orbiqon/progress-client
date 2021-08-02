import React from 'react';

function TextField({
  icon,
  placeholder,
  height,
  indent,
  pb,
  pt,
  border,
  ml,
  mr,
  dpb,
}) {
  return (
    <div className={`relative sm:mx-15 2xl:ml-${ml} 2xl:mr-${mr}`}>
      <input
        className={` w-100% rounded-sm box-${border} bg-white outline-none ${border} ${border}-solid ${border}-border h-${height} 2xl:pb-${dpb} pb-${pb} pt-${pt} -indent-${indent} placeholder-dark-grey`}
        placeholder={placeholder}
      />
      {icon ? (
        <img
          className="absolute left-20 top-18"
          src={`images/textField/${icon}.svg`}
        />
      ) : null}
    </div>
  );
}

export default TextField;
