import React from "react";
import { clsx } from "clsx";
import Button from "./button";
import { IoChevronDownOutline, IoChevronForward } from "react-icons/io5";

const DropdownContext = React.createContext();

const Dropdown = ({ children, className, open, auto = false }) => {
  const [isOpen, setIsOpen] = React.useState(open || false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    console.log("auto", auto);
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        auto
      ) {
        console.log("clicked outside");
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, auto]);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={dropdownRef} className={clsx("relative", className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

const DropdownTrigger = ({ children, className, indicator }) => {
  const { isOpen, setIsOpen } = React.useContext(DropdownContext);
  const isOpenIndicator = isOpen ? (
    <IoChevronDownOutline className="text-xl" />
  ) : (
    <IoChevronForward className="text-xl" />
  );

  return (
    <Button
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(className, "flex items-center justify-between")}
    >
      {children}
      {indicator && <span>{isOpenIndicator}</span>}
    </Button>
  );
};

const DropdownContent = ({ children, className }) => {
  const { isOpen } = React.useContext(DropdownContext);

  if (!isOpen) return null;

  return <div className={className}>{children}</div>;
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
