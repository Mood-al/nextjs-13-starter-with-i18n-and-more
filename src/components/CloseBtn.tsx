interface CloseBtnProps {
  style?: object;
  closeModal: () => void;
  className?: string;
}

const CloseBtn = ({ closeModal, style, className }: CloseBtnProps) => {
  return (
    <button
      className={`btn fs-3 lead no-focus p-0 ${className ? className : ""}`}
      type="button"
      onClick={closeModal}
      style={style}
    >
      <i className="fe-x"></i>
    </button>
  );
};

export default CloseBtn;
