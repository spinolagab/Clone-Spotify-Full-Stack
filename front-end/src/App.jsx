import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";
import Artists from "./pages/Artists";

const App = () => {
  return (
    // esse fragment (tag vazia) nos permite devolver mais de um elemento
    <BrowserRouter>
      <Header />
      {/* o header é algo comum em qualquer aba então ele não entr nas routes */}
      {/* As rotas tornam a troca de abas algo mais rápido */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
