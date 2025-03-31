import React from "react";
import Button from "./button";

const DropdownContext = React.createContext();

const Dropdown = ({ children, className, open }) => {
  const [isOpen, setIsOpen] = React.useState(open || false);
  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={`relative ${className}`}>{children}</div>
    </DropdownContext.Provider>
  );
};

const DropdownTrigger = ({ children, className }) => {
  const { isOpen, setIsOpen } = React.useContext(DropdownContext);

  return (
    <Button onClick={() => setIsOpen(!isOpen)} className={className}>
      {children}
    </Button>
  );
};

const DropdownContent = ({ children, className }) => {
  const { isOpen } = React.useContext(DropdownContext);

  if (!isOpen) return null;

  return (
    <div
      className={`
        transform-gpu transition-all duration-200 ease-in-out
        ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

const DropdownItem = ({ onClick, children, className }) => {
  const { setIsOpen } = React.useContext(DropdownContext);

  const handleClick = (e) => {
    onClick?.(e);
    setIsOpen(false);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export { Dropdown, DropdownTrigger, DropdownItem, DropdownContent };
