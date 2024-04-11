import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Produto = ({ slug }) => {
    const [produto, setProduto] = useState(null);

    const fetchProduct = async (slug) => {
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${slug}`);
        const json = await response.json();

        if (json?.data?.status == 400) {
          return <p>Produto não encontrado...</p>;
        }
    
        setProduto(json);
      }

    useEffect(() => {
        fetchProduct(slug);
    }, [slug]); 

    if (!produto) {
        return <p>Produto não encontrado...</p>;
    }

    return <>
        <h1>{produto.nome}</h1>
        <p>R$ {produto.preco}</p>
        {produto.fotos && <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />}
    </>
}

export default Produto;