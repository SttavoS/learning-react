import { useEffect, useState } from 'react'
import './App.css'
import Produto from './Produto';

const App = () => {
  const [preferencia, setPreferencia] = useState(null);

  useEffect(() => {
    const preferenciaSalvaNoLocalStorage = window.localStorage.getItem('preferencia');

    if (preferenciaSalvaNoLocalStorage) {
      setPreferencia(preferenciaSalvaNoLocalStorage);
    }
  }, []);

  const definePreferencia = (input) => {
    setPreferencia(input);
    window.localStorage.setItem('preferencia', input);
  }

  return (
    <>
      {preferencia && <h1>Preferência: {preferencia}</h1>}

      <div className="items">
        <button className="btn" onClick={() => definePreferencia('notebook')}>notebook</button>
        <button className="btn" onClick={() => definePreferencia('smartphone')}>smartphone</button>
      </div>

      {preferencia && <Produto slug={preferencia} />}
    </>
  )
}

export default App
