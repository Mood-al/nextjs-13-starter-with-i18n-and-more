type LoadingBtnProps = {
  isLoading: boolean;
  variant?: string;
  label: string;
  type?: "submit" | "button" | "reset" | undefined;
  block?: boolean | null;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  loadingIconPlaceholder?: string;
};

const LoadingButton = ({
  isLoading = false,
  variant = "primary",
  label,
  type = "submit",
  block,
  onClick,
  disabled,
  className,
  loadingIconPlaceholder,
}: LoadingBtnProps) => {
  return (
    <button
      disabled={disabled || isLoading}
      onClick={onClick}
      type={type}
      className={`btn ${variant ? `btn-${variant}` : ""} ${
        block ? "w-100 d-block" : ""
      } ${className ? className : ""}`}
    >
      {isLoading ? (
        <>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
          {label}
        </>
      ) : (
        <>
          {loadingIconPlaceholder} {label}
        </>
      )}
    </button>
  );
};

export default LoadingButton;
