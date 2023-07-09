"use client";
import React, { createElement } from "react";
import LoadingButton from "./LoadingBtn";

type FormProps = {
  defaultValues?: string;
  buttonLabel?: string;
  children: JSX.Element | JSX.Element[] | string;
  onSubmit: (data: object) => Promise<void>;
  handleSubmit: any;
  register: any;
  btnClassName?: string;
  isLoading: boolean;
  watch: any;
  className?: string;
};
const Form = ({
  defaultValues,
  buttonLabel = "Submit",
  children,
  onSubmit,
  handleSubmit,
  register,
  btnClassName = "btn-primary",
  isLoading = false,
  watch,
  ...rest
}: FormProps) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate {...rest}>
      <>
        {Array.isArray(children)
          ? children.map((child) => {
              return child.props.name
                ? createElement(child.type, {
                    ...{
                      ...child.props,
                      register,
                      key: child.props.name,
                      watch,
                    },
                  })
                : child;
            })
          : children}
      </>

      <LoadingButton
        label={buttonLabel}
        isLoading={isLoading}
        block
        className={btnClassName}
      />
    </form>
  );
};

export default Form;
