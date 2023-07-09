import Offcanvas from "react-bootstrap/Offcanvas";
import CloseBtn from "./CloseBtn";

interface CustomOffcanvasHeaderProps {
  children: JSX.Element | JSX.Element[] | string;
  onCloseBtnClick: () => void;
  className?: string;
}
const CustomOffcanvasHeader = ({
  children,
  onCloseBtnClick,
  className,
  ...props
}: CustomOffcanvasHeaderProps) => {
  return (
    <Offcanvas.Header className={`border-bottom ${className || ""}`} {...props}>
      <Offcanvas.Title>{children}</Offcanvas.Title>
      <CloseBtn closeModal={onCloseBtnClick} />
    </Offcanvas.Header>
  );
};

export default CustomOffcanvasHeader;
