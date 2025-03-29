import React from "react";

const Button = ({ children, ...props }) => {
  const { variant } = props;
  const variantClasses = {
    primary: "btn-primary",
    outline: "btn-outline",
  };

  const buttonClass = variant ? variantClasses[variant] : "";
  return (
    <button {...props} className={`${props.className} ${buttonClass} btn`}>
      {children}
    </button>
  );
};

export default Button;
