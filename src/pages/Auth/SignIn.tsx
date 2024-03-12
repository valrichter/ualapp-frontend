import Auth from "@/components/auth/AuthForm";
import useAxios from "@/components/hooks/useAxios";
import { auth_token } from "@/utils/constants";
import { authUrl } from "@/utils/network";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginType {
  access_token: string;
  expires_at: string;
  user_email: string;
}

const Login = () => {
  const [loading, SetLoading] = useState(false);
  const { axiosHandler } = useAxios();
  const navigate = useNavigate();

  const onSubmit = async (
    e: FormEvent<HTMLFormElement>,
    formRef: React.RefObject<HTMLFormElement>
  ) => {
    e.preventDefault();
    SetLoading(true);
    const arg = {
      email: formRef.current?.email.value,
      password: formRef.current?.password.value,
    };

    const response = await axiosHandler<LoginType>(authUrl.login, "post", arg);

    SetLoading(false);

    if (response) {
      localStorage.setItem(auth_token, response.access_token);
      console.log(response.access_token);
      navigate("/");
    }
  };

  return <Auth loading={loading} showRemembered onSubmit={onSubmit} />;
};

export default Login;
