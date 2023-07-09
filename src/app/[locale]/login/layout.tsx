import React from "react";

type LayoutProps = {
  children: JSX.Element | JSX.Element[] | string;
};

const LoginLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default LoginLayout;
