import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Produto = () => {
  const [produto, setProduto] = useState(null);
  const { id } = useParams();
  const { request, loading, error } = useFetch();

  useEffect(() => {
    const fetchProduct = async (id) => {
      const { json } = await request(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`
      );

      setProduto(json);
      document.title = `${produto.nome} | Ranek`;
    };

    fetchProduct(id);
  }, [id, setProduto]);

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <h1>Ops...</h1>;
  }

  if (produto == null) return null;

  return (
    <section className="produto-detail entry-animation">
      <div className="produto-detail-images">
        {produto?.fotos.map((foto) => {
          return <img key={foto.titulo} src={foto.src} alt={foto.titulo} />;
        })}
      </div>
      <div className="produto-detail-description">
        <h1>{produto?.nome}</h1>
        <span className="badge">R$ {produto.preco}</span>
        <p>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
