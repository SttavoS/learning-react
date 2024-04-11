import { useState } from 'react';
import './App.css'
import Produto from './Produto';

function App() {
  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async (slug) => {
    setLoading(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${slug}`);
    const json = await response.json();

    setLoading(false);
    if (json?.data?.status == 400) {
      setErro(true);
      return;
    }

    setProduto(json);
  }

  return (
    <>
      <div className="items">
        <button className="btn" onClick={() => fetchProduct('notebook')}>notebook</button>
        <button className="btn" onClick={() => fetchProduct('smartphone')}>smartphone</button>
        <button className="btn" onClick={() => fetchProduct('tablet')}>tablet</button>
      </div>

      {loading && <div>Carregando...</div>}
      {erro && (<p>Produto não encontrado</p>)}

      {produto && !loading && (<Produto dados={produto} />)}
    </>
  )
}

export default App
