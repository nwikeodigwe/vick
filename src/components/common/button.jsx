import React from "react";

const Button = ({ children, ...props }) => {
  const { variant } = props;
  const variantClasses = {
    primary: "btn btn-primary",
    outline: "btn btn-outline",
  };

  const buttonClass = variant ? variantClasses[variant] : "";
  return (
    <button {...props} className={`${props.className} ${buttonClass}`}>
      {children}
    </button>
  );
};

export default Button;
