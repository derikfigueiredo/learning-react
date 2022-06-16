import { Header } from './components/Header'; //IPORTANDO O componente, 
//import { COMPONENTE } from 'Local-do-componente';
//PROP = ATRIBUTO 

const App = () => {
  return (
    //uso <tag-com-nome-do-componente /> e coloco no lugar que quero usar o componente 
    <div>
      <Header title="Titulo 1"/> 
      <Header title="Titulo 2"/>
      <Header />
      Olá, mundo
    </div>
  );
}

export default App;
