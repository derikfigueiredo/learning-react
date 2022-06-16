import { useState } from 'react';


function App() {
  //Criar variavel usando state const [nome-da-variável, funcao-que-quero-usar-mudar-a-variavel ] = useState(valor-inicial-variavel)
  const [name, setName] = useState('Derik');


 const handleClick = () => {
    setName('Bonieky');
  }

  return (
    <div>
      O seu nome é: {name}.
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default App;
