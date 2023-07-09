import { useCallback, useState } from "react";

const useToggle = () => {
  const [show, setShow] = useState(false);

  /**
   * It sets the show variable to false.
   */
  const handleClose = useCallback(() => setShow(false), []);

  /**
   * `handleOpen` is a function that sets the `show` state to `true`
   */
  const handleOpen = useCallback(() => setShow(true), []);

  const handleToggle = useCallback(() => setShow((prev) => !prev), []);
  return {
    show,
    handleClose,
    handleOpen,
    handleToggle,
  };
};

export default useToggle;
