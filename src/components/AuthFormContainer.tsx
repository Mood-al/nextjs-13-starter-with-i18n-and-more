import React from "react";
type AuthFormContainerProps = {
  children: JSX.Element | JSX.Element[] | string;
  title: string;
};

const AuthFormContainer = ({ children, title }: AuthFormContainerProps) => {
  return (
    <section
      className="min-vh-100 d-flex align-items-center section-image overlay-soft-dark"
      data-background="../../assets/img/pages/form-image.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-12 d-flex align-items-center justify-content-center">
            <div className="signin-inner my-4 my-lg-0 shadow-soft border rounded p-4 p-lg-5 w-100 fmxw-500">
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h1 className="mb-0 h3">{title}</h1>
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthFormContainer;
