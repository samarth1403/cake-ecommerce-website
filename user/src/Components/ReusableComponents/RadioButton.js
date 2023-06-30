import React from "react";
import classNames from "classnames";

const RadioButton = ({ children, className, ...rest }) => {
  const finalClass = classNames(
    className,
    "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] flex flex-row flex-no-wrap justify-center items-center"
  );
  return (
    <div className={finalClass} {...rest}>
      <input
        type="radio"
        className="m-2 text-xl"
      />
      <label>
        {children}
      </label>
    </div>
  );
};

export default RadioButton;
