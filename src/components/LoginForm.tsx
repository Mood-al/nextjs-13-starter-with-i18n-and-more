"use client";
// import AuthFormWrapper from "./AuthFormWrapper";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import Input from "./Form/Input";
import Form from "./Form";
import { useTranslations } from "next-intl";
import { useAuth } from "./Providers/AuthContext";
import AuthFormContainer from "./AuthFormContainer";
import Input from "./Input";
import Link from "next-intl/link";

const EmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .max(32, "Max password length is 32")
    .min(4, "Min password length is 4")
    .required("Password is required"),
});
const LoginForm = () => {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailSchema),
    defaultValues: {
      email: "test2@test2.com",
      password: "a135642A",
    },
  });

  const { login, isLoading } = useAuth();
  const onSubmit = async (data: object) => {
    await login(data);
  };
  return (
    <AuthFormContainer title="login">
      <Form
        buttonLabel={t(`login`)}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        className="change-form"
        watch={watch}
        isLoading={isLoading}
      >
        <Input
          name="email"
          type="email"
          inputIcon={<span className="fe-at-sign"></span>}
          placeholder={t("email")}
          label={t("enter_email")}
          error={errors.email?.message}
        />
        <Input
          name="password"
          type="password"
          placeholder={t("password")}
          label={t("enter_password")}
          error={errors.password?.message}
          inputIcon={<span className="fe-key"></span>}
        />
      </Form>
      {/* <form action="#" className="mt-4">
        <div className="form-group mb-4">
          <label htmlFor="email">Your Email</label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <span className="fas fe-at-sign"></span>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="example@company.com"
              id="email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-group mb-4">
            <label htmlFor="password">Your Password</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon2">
                <span className="fes fe-key"></span>
              </span>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="password"
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check mb-0">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="remember"
              />
              <label className="form-check-label mb-0" htmlFor="remember">
                Remember me
              </label>
            </div>
            <div>
              <Link href="/forgot-password" className="small text-right">
                Lost password?
              </Link>
            </div>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form> */}
      <div className="mt-3 mb-4 text-center">
        <span className="fw-normal">or login with</span>
      </div>
      <div className="btn-wrapper my-4 text-center">
        <a
          href="#"
          className="btn btn-icon-only btn-pill btn-outline-gray-300 text-facebook me-2"
          aria-label="facebook button"
          title="facebook button"
        >
          <span aria-hidden="true" className="fab fa-facebook-f"></span>
        </a>
        <a
          href="#"
          className="btn btn-icon-only btn-pill btn-outline-gray-300 text-twitter me-2"
          aria-label="twitter button"
          title="twitter button"
        >
          <span aria-hidden="true" className="fab fa-twitter"></span>
        </a>
        <a
          href="#"
          className="btn btn-icon-only btn-pill btn-outline-gray-300 text-facebook"
          aria-label="github button"
          title="github button"
        >
          <span aria-hidden="true" className="fab fa-github"></span>
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <span className="fw-normal">
          Not registered?
          <Link href="/signup" className="fw-bold text-underline">
            Create account
          </Link>
        </span>
      </div>
    </AuthFormContainer>
  );
};

export default LoginForm;
