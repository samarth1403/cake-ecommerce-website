import React from "react";
import classNames from "classnames";

const ButtonRYG = ({ children, className, ...rest }) => {
  const finalClass = classNames(
    className,
    "font-roboto font-bold leading-normal text-[#0D103C]"
  );
  return (
    <button
      style={{
        background: "linear-gradient(90deg, #DB7A7A 0%, #FEE77A 100%)",
      }}
      className={finalClass}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonRYG;
