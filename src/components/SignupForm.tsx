"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "./Providers/AuthContext";
import AuthFormContainer from "./AuthFormContainer";
import Form from "./Form";
import Input from "./Input";
import { usePathname, useRouter } from "next/navigation";

const EmailSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
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
const SignupForm = () => {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailSchema),
    defaultValues: {
      name: "mohammad ali",
      email: "test2@test2.com",
      password: "a135642A",
    },
  });

  const { signup, isLoading, error: apiErrors } = useAuth();
  const onSubmit = async (data: any) => {
    await signup(data);
  };

  return (
    <AuthFormContainer title="Create an account">
      <Form
        buttonLabel={t(`signup`)}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        className="change-form"
        watch={watch}
        isLoading={isLoading}
      >
        <Input
          name="name"
          type="text"
          inputIcon={
            <div dir="auto">
              <span className="fe-user"></span> {window.location.origin}/
              {watch("name").replace(/\s/g, "")}
            </div>
          }
          placeholder={t("name")}
          label={t("enter_name")}
          error={errors.name?.message || apiErrors?.name}
        />
        <Input
          name="email"
          type="email"
          inputIcon={<span className="fe-at-sign"></span>}
          placeholder={t("email")}
          label={t("enter_email")}
          error={errors.email?.message || apiErrors?.email}
        />
        <Input
          name="password"
          type="password"
          placeholder={t("password")}
          label={t("enter_password")}
          error={errors.password?.message || apiErrors?.password}
          inputIcon={<span className="fe-key"></span>}
        />
      </Form>
      <div className="mt-3 mb-4 text-center">
        <span className="fw-normal">or</span>
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
          Already have an account?
          <Link href="/login" className="fw-bold text-underline">
            Login here
          </Link>
        </span>
      </div>
    </AuthFormContainer>
  );
};

export default SignupForm;
