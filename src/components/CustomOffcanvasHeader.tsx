import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseBtn from "./CloseBtn";

interface CustomOffcanvasHeaderProps {
  children: string | React.ReactNode;
  onCloseBtnClick: () => void;
  className?: string;
}
const CustomOffcanvasHeader: React.FC<CustomOffcanvasHeaderProps> = ({
  children,
  onCloseBtnClick,
  className,
  ...props
}) => {
  return (
    <Offcanvas.Header className={`border-bottom ${className || ""}`} {...props}>
      <Offcanvas.Title>{children}</Offcanvas.Title>
      <CloseBtn closeModal={onCloseBtnClick} />
    </Offcanvas.Header>
  );
};

export default CustomOffcanvasHeader;
