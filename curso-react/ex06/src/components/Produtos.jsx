import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const { request, loading } = useFetch();

  useEffect(() => {
    const fetchProducts = async () => {
      const { json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto"
      );

      setProdutos(json);
    };

    fetchProducts();
    document.title = "Produtos | Ranek";
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <main className="entry-animation">
      <h1>Produtos</h1>
      <section className="produtos">
        {produtos.map((produto) => {
          return (
            <div key={produto.id} className="produto">
              <Link to={`${produto.id}`}>
                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
              </Link>
              <h2>{produto.nome}</h2>
              <span>R$ {produto.preco}</span>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Produtos;
