import React from 'react'
import classNames from 'classnames'

const InputForForm = ({ className, ...rest }) => {
  const finalClass = classNames(
    className,
    "bg-[#0D103C] w-[320px] h-[75px] font-roboto font-[400] text-[#fff] text-xl rounded-[15px] px-4 m-4"
  );
  return <input className={finalClass} {...rest} />;
};

export default InputForForm