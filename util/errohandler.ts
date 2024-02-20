import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const errorHandler = (err: AxiosError) => {
  toast(JSON.stringify(err.response?.data) || err.message, {
    type: "error",
  });
};
