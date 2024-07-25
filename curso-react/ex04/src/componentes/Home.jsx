import useFetch from "../hooks/useFetch";

const Home = () => {
  const { request } = useFetch();

  const fetchProduct = async (slug) => {
    request(`https://ranekapi.origamid.dev/json/api/produto/${slug}`);
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