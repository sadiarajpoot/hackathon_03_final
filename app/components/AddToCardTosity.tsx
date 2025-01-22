"use client";

import React from "react";
import { Bounce,  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCardTosity = () => {

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default AddToCardTosity;
