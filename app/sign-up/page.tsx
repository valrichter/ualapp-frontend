"use client";

import Auth from "@/components/Auth";
import { authURL } from "@/util/network";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { errorHandler } from "@/util/errohandler";

const Register = () => {
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
      .post(authURL.register, arg)
      .catch((err: AxiosError) => errorHandler(err));
    SetLoading(false);

    if (response) {
      toast("User created successfully", {
        type: "success",
      });
      Router.push("/login");
    }
  };

  return (
    <Auth
      onSubmit={onSubmit}
      title="Sing Up"
      loading={loading}
      buttonTitle="Register"
      accountInfoText={{
        initialText: "Already have an account?",
        actionText: "Login",
        actionLink: "/login",
      }}
    />
  );
};

export default Register;
