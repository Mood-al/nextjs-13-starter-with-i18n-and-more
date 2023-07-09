import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslations } from "next-intl";
import Modal from "react-bootstrap/Modal";
import CloseBtn from "./CloseBtn";
import CustomOffcanvas from "./CustomOffcanvas";
import CustomOffcanvasBody from "./CustomOffcanvasBody";
import CustomOffcanvasFooter from "./CustomOffcanvasFooter";
import CustomOffcanvasHeader from "./CustomOffcanvasHeader";
interface ModalOffacanvasProps {
  showModalOffcanvas: boolean;
  handleCloseModalOffCanvas: () => void;
  title: JSX.Element | string;
  children: JSX.Element | JSX.Element[] | string;
  footerAction?: boolean;
  px?: string;
  py?: string;
}
const ModalOffcanvas = ({
  showModalOffcanvas,
  handleCloseModalOffCanvas,
  title,
  children,
  footerAction,
  px = "px-2",
  py = "py-0",
  ...props
}: ModalOffacanvasProps) => {
  const matches = useMediaQuery("(max-width: 991.98px)");
  const t = useTranslations();

  return (
    <>
      {matches ? (
        <CustomOffcanvas
          show={showModalOffcanvas}
          onHide={handleCloseModalOffCanvas}
          placement={matches ? "bottom" : false}
          {...props}
        >
          {title && (
            <CustomOffcanvasHeader onCloseBtnClick={handleCloseModalOffCanvas}>
              {t(title)}
            </CustomOffcanvasHeader>
          )}
          <CustomOffcanvasBody className={`${px} ${py} `}>
            {children}
          </CustomOffcanvasBody>
          {footerAction && (
            <CustomOffcanvasFooter>{footerAction}</CustomOffcanvasFooter>
          )}
        </CustomOffcanvas>
      ) : (
        <Modal
          show={showModalOffcanvas}
          onHide={handleCloseModalOffCanvas}
          centered
          contentClassName="rounded"
          {...props}
        >
          {title && (
            <Modal.Header className="py-2" closeButton={false}>
              <Modal.Title>{t(title)}</Modal.Title>
              <CloseBtn closeModal={handleCloseModalOffCanvas} />
            </Modal.Header>
          )}
          <Modal.Body className={`${px} ${py}`}>{children}</Modal.Body>
          {footerAction && <Modal.Footer>{footerAction}</Modal.Footer>}
        </Modal>
      )}
    </>
  );
};

export default ModalOffcanvas;
