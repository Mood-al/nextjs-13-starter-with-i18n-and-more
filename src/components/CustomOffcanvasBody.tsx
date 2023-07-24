import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const CustomOffcanvasBody = ({
  children,
  className = "",
  ...props
}: {
  children: JSX.Element | JSX.Element[] | string | React.ReactNode;
  className?: string;
}) => {
  return (
    <Offcanvas.Body className={className} {...props}>
      {children}
    </Offcanvas.Body>
  );
};

export default CustomOffcanvasBody;
