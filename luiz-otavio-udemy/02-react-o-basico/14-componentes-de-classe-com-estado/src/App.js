import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//Estados são dados que o compenete utiliza
//COMPONENTE DE CLASSE, Esse aqui pode ser stateless

class App extends Component {
//criamos o constructor para receber props
//Super para chamar o constructor da classe
  constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this);
    

//todo componente react tem um estado
    this.state = {
      name: 'Luiz Otávio'
    }

 
  }

  //Dentro do meu método que está dentro da classe, não consegue acessar o this, para resolver isso: this.handlePClick = this.handlePClick.bind(this); na minha classe
  handlePClick() {
    const { name } = this.state;
      alert(`<p> clicado ${name}`);

      //Sempre que eu mudo meu estado a função render será chamado dnv
      this.setState({name: 'Júnior'})
  }

//criamos uma arrow function, pois ela não tem o this, com isso, ao usar this, será buscado o this do elemento pai. Isso evita usar o exemplo "  this.handlePClick = this.handlePClick.bind(this);"
 handleAClick = () => {

  }
 
//Crio um método dentro da class chamado render que possui a mesma função que o return, retornar JSX
  render() {
    const name = this.state.name;

    //Utilizamos {chaves} para colocar variável no JSX
    return <h1 onClick={this.handlePClick}>Oi {name}</h1>
  }
}

//Stateless componente = sem estado
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
