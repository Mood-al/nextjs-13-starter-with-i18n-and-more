import React from "react";

type AddButtonProps = {
  onClick: () => void;
};

const AddButtton = ({ onClick, ...rest }: AddButtonProps) => {
  return (
    <button
      className="btn btn-lg btn-primary d-block w-100"
      type="button"
      onClick={onClick}
      {...rest}
    >
      Add Link <i className="fe-plus"></i>
    </button>
  );
};

export default AddButtton;
