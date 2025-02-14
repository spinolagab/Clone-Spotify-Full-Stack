import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    // esse fragment (tag vazia) nos permite devolver mais de um elemento
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
