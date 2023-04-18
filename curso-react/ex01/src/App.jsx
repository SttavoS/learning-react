import './App.css'

function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];  

  return (
    <section className="App">
      {produtos
        .filter(produto => Number.parseInt(produto.preco.replace('R$ ', '')) > 1500)
        .map(p => {
          return (<div key={p.id}>
            <h1>{p.nome}</h1>
            Preço: R$ {p.preco}
            <ul>
              {p.cores.map((cor, index) => {
                return (<li key={index} style={{ backgroundColor: cor }}>{cor}</li>);
              })}
            </ul>
          </div>);
        })}
    </section>
  )
}

export default App;
