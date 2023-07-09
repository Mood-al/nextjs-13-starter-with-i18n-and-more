import useIsRTL from "@/hooks/useIsRTL";
import Offcanvas from "react-bootstrap/Offcanvas";

const CustomOffcanvas = ({ placement, ...props }) => {
  const isRTL = useIsRTL();
  return (
    <Offcanvas
      placement={placement ? placement : isRTL ? "end" : "start"}
      {...props}

      // style={{ height: placement === "bottom" ? "90vh" : "unset" }}
    >
      {props.children}
    </Offcanvas>
  );
};

export default CustomOffcanvas;
