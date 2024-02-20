"use client";

import Auth from "@/components/Auth";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, SetLoading] = useState(false);
  const onSubmit = (
    e: FormEvent<HTMLFormElement>,
    formRef: React.RefObject<HTMLFormElement>
  ) => {
    e.preventDefault();
    toast("Login Toast", {
      type: "success",
    });
  };
  return <Auth loading={loading} showRemembered onSubmit={onSubmit} />;
};

export default Login;
