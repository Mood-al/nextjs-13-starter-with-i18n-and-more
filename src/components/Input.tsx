"use client";

import React from "react";
import useInputValueLangaugeDetector from "@/hooks/useInputValueLangaugeDetector";
interface InputProps {
  register?: any;
  name: string;
  error: any;
  label?: string;
  containerClassName?: string;
  inputIcon?: string | JSX.Element;
  watch?: any;
  onChange?: () => void;
  className?: string;
  style?: object;
  type: string;
  placeholder: string;
}
const Input = ({
  register,
  name,
  error,
  label,
  containerClassName = "",
  inputIcon,
  watch,
  className = "",
  style = {},
  onChange = () => {},
  type = "text",
  placeholder,
  ...rest
}: InputProps) => {
  watch = watch?.(name) || "";
  const { dir, onInputFocus, onInputBlur } =
    useInputValueLangaugeDetector(watch);

  return (
    <div
      className={`${containerClassName} ${inputIcon ? "form-group" : ""} mb-4`}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <div className={`${inputIcon ? "input-group" : ""}`}>
        {inputIcon && (
          <span className="input-group-text" id="basic-addon1">
            {inputIcon}
          </span>
        )}
        <input
          aria-invalid={error ? "true" : "false"}
          {...register(name, { onChange, onBlur: onInputBlur })}
          {...rest}
          type={type}
          dir={dir}
          style={{ direction: dir, ...style }}
          onFocus={onInputFocus}
          className={`${className || ""} form-control`}
          placeholder={placeholder}
          required
        />
      </div>
      {error && (
        <span role="alert" className="text-danger mt-2 d-block">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
