import React from "react";
import classNames from "classnames";
const SocialBox = ({ children, className, ...rest }) => {
  const finalClass = classNames(
    className,
    "flex flex-row flex-wrap justify-center items-center w-[75px] h-[75px] rounded-[25px]"
  );
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #00FFF0 0.06%, #FFFFFF 100%)",
      }}
      className={finalClass}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SocialBox;
