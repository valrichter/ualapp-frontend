'use client'

import Auth from "@/components/Auth";
import { FormEvent } from "react";
import { toast } from "react-toastify";

const Register = () => {
	const onSubmit = (e: FormEvent<HTMLFormElement>,
		formRef: React.RefObject<HTMLFormElement>
		) => {
		e.preventDefault();
		toast(formRef.current?.email.value, {
			type: "success",
		})
	};
	return <Auth
		onSubmit={onSubmit}
		title="Sing Up"
		buttonTitle="Register"
		accountInfoText={{
			initialText: "Already have an account?",
			actionText: "Login",
			actionLink: "/login"
		}} 
		loading={false}			/>
};

export default Register