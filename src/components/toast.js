import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (type, text) =>
  toast[type](text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
