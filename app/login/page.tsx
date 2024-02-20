"use client";

import Auth from "@/components/Auth";
import { errorHandler } from "@/util/errohandler";
import { authURL } from "@/util/network";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
  const [loading, SetLoading] = useState(false);
  const Router = useRouter();
  const onSubmit = async (
    e: FormEvent<HTMLFormElement>,
    formRef: React.RefObject<HTMLFormElement>
  ) => {
    e.preventDefault();

    SetLoading(true);
    let arg = {
      email: formRef.current?.email.value,
      password: formRef.current?.password.value,
    };

    const response = await axios
      .post(authURL.login, arg)
      .catch((err: AxiosError) => errorHandler(err));
    SetLoading(false);

    if (response) {
      toast("User created successfully", {
        type: "success",
      });
      Router.push("/");
    }
  };
  return <Auth loading={loading} showRemembered onSubmit={onSubmit} />;
};

export default Login;
