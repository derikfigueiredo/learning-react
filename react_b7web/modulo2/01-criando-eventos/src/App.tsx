///////////////////// 01-criando-eventos /////////////////////////


const handleButtonClick = () => {
  alert("O botão foi clicado")
}

function App() {
  return (
    <div>
      <button onClick={handleButtonClick}>Clique aqui</button>
    </div>
  )
}

//Executa todo o componente novamente quando alguma informação dele é modificada

export default App
