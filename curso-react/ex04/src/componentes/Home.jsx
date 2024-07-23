const Home = () => {
  // const [produto, setProduto] = useState(null);

  const fetchProduct = async (slug) => {
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${slug}`);
    const json = await response.json();

    if (json?.data?.status == 400) {
      return <p>Produto não encontrado...</p>;
    }

    // setProduto(json);
  }

  return <>
    <h1>Escolha um produto:</h1>
    <ul>
      <li onClick={fetchProduct('notebook')}>Notebook</li>
      <li onClick={fetchProduct('smartphone')}>Smartphone</li>
      <li onClick={fetchProduct('camera')}>Câmera</li>
      <li onClick={fetchProduct('smartwatch')}>Smartwatch</li>
      <li onClick={fetchProduct('tablet')}>Tablet</li>
    </ul>
  </>;
}

export default Home;