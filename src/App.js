import React from "react";
import { Main } from "./pages/Main";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/GlobalStyle";
function App() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
