import React from "react";
import { toast } from "react-toastify";

export const Notification = (type, message) => {
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-center",
    autoClose: 3000,
    // hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: type,

    style: { backgroundColor: type === "error" ? "" : "" }
  });
};
