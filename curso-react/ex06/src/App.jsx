import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./components/Produtos.jsx";
import Produto from "./components/Produto.jsx";
import Contato from "./components/Contato";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="produtos/:id" element={<Produto />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
