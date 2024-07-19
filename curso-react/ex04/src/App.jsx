import './App.css'
import { ProdutoProvider } from './hooks/ProdutoProvider';
import Home from './componentes/Home';
import Produto from './componentes/Produto';

function App() {
  return (
    <ProdutoProvider>
      <h1>Aaa</h1>
      <Home />
      <Produto />
    </ProdutoProvider>
  )
}

export default App
