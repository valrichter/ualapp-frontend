'use client'

import Auth from "@/components/Auth";
import { FormEvent } from "react";
import { toast } from "react-toastify";

const Login = () => {
	const onSubmit = (e: FormEvent<HTMLFormElement>,
		formRef: React.RefObject<HTMLFormElement>
		) => {
		e.preventDefault();
		toast("Login Toast", {
			type: "success",
		})
	};
	return <Auth showRemembered onSubmit={onSubmit} loading={false} />
};

export default Login