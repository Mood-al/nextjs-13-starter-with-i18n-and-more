import useIsRTL from "@/hooks/useIsRTL";
import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
interface CustomOffcanvasProps extends React.ComponentPropsWithoutRef<"div"> {
  placement?: any;
  children: JSX.Element | JSX.Element[] | string;
  onHide: () => void;
  show: boolean;
}
const CustomOffcanvas = (props: CustomOffcanvasProps) => {
  const isRTL = useIsRTL();
  const { placement, children, onHide, show, ...rest } = props;
  return (
    <Offcanvas
      placement={placement ? placement : isRTL ? "end" : "start"}
      show={show}
      {...rest}
      onHide={onHide}

      // style={{ height: placement === "bottom" ? "90vh" : "unset" }}
    >
      {children}
    </Offcanvas>
  );
};

export default CustomOffcanvas;
