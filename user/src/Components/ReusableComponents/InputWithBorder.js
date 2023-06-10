import React from "react";
import classNames from "classnames";

const InputWithBorder = ({ className, ...rest }) => {
  const finalClass = classNames(
    className,
    "text-[#0D103C] font-roboto font-[400] text-xl rounded-[15px] bg-[#fff] px-4 m-4 shadow-[6px_6px_2px_#0D103C]"
  );
  return <input className={finalClass} {...rest} />;
};

export default InputWithBorder;
