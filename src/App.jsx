import React, { useState } from "react";
import AppRoutes from "./router/Router";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
