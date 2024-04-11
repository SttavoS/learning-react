/* eslint-disable react/prop-types */
const Produto = ({ dados }) => {
    return <>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco}</p>
        {dados.fotos && <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />}
    </>
}

export default Produto;