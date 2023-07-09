import Offcanvas from "react-bootstrap/Offcanvas";

const CustomOffcanvasBody = ({ children, ...props }) => {
  return <Offcanvas.Body {...props}>{children}</Offcanvas.Body>;
};

export default CustomOffcanvasBody;
