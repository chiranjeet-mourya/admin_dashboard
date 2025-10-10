import React, { useState } from "react";
import AppRoutes from "./router/Router";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000}/>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
