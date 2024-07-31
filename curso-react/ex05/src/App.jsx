import { useState } from "react";
import "./App.css";
import perguntas from "./perguntas";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState();
  const [erro, setErro] = useState(false);
  const [final, setFinal] = useState(false);

  const checkAnswer = (event) => {
    event.preventDefault();
    const pergunta = perguntas.find(
      (pergunta) => pergunta.id == currentQuestion
    );

    if (currentAnswer !== pergunta.resposta) {
      setErro(true);
      return;
    }

    setErro(false);
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion == perguntas.length) {
      setFinal(true);
    }
  };

  return (
    <form method="POST" onSubmit={checkAnswer}>
      {perguntas
        .filter((pergunta) => pergunta.id == currentQuestion)
        .map((pergunta) => {
          return (
            <fieldset className="question-box" key={pergunta.id}>
              <legend>{pergunta.pergunta}</legend>
              {pergunta.options.map((option, index) => {
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      value={option}
                      name={pergunta.id}
                      onChange={(e) => {
                        setCurrentAnswer(e.currentTarget.value);
                      }}
                    />
                    {option}
                  </label>
                );
              })}
            </fieldset>
          );
        })}

      {erro && <p className="erro">Resposta errada!</p>}

      {final && <p className="sucesso">Parabéns!</p>}

      {!final && (
        <button className="next-btn" type="submit">
          Próxima
        </button>
      )}
    </form>
  );
}

export default App;
