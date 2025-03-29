import React from "react";

const Input = (props) => {
  return <input {...props} className={`${props.className} input-primary`} />;
};

export default Input;
