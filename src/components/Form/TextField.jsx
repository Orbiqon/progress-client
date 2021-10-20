import React from 'react';

function TextField({
  icon,
  height,
  indent,
  pb,
  pt,
  border,
  ml,
  mr,
  dpb,
  name,
  placeholder,
  type,
  onChange,
  handleBlur,
  value,
  error,
}) {
  return (
    <div className={`relative sm:mx-15 ml-${ml} mr-${mr}`}>
      <input
        className={` w-100% rounded-sm box-${border} bg-white outline-none ${border} ${border}-solid ${border}-border h-${height} pb-${dpb} pb-${pb} pt-${pt} -indent-${indent} placeholder-dark-grey`}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        handleBlur={handleBlur}
        value={value}
      />
      {icon && (
        <img
          className="absolute left-20 top-18"
          src={`images/textField/${icon}.svg`}
        />
      )}
      {error && <div className="mt-10 ml-10 text-sm text-red">{error}</div>}
    </div>
  );
}

export default TextField;
