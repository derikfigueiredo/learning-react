            /******************* 07 - Entendendo o JSX******************** */

//Cada função é um componente
// function App() {
//   return <div>Olá mundo!</div>
// }

/*
  // o JSX é uma forma de criar elementos para serem utilizadas como templates de aplicações React. Basicamente, 
  // os elementos criados com o JSX são bem similares com código HTML e fornecem aos desenvolvedores uma forma 
  // mais simples e intuitiva de criar os componentes de uma aplicação. Porém, apesar de muito similar ao
  //  HTML, o JSX não é interpretado pelo navegador. Por este motivo, deve-se utilizar um “transpilador” para 
  //  essa conversão. Atualmente, o mais conhecido deles é o Babel, do qual falaremos em outro artigo.

///////COM O USO DO TSX
// const App = () => {
//   return (
      <div>
//     Opa, tudo bem?
//     </div>
//   );
// }    
//   



//////SEM O TSX
const App = () => {
  return React.createElement('div', null, 'Meu nome é Bonieky');
}


export default App;,
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Header } from './componentes/Header'; //Importar componentes externo

//Criando o componente Header
// const Header = () => {
//   return (
//     <header>
//       <h1>Título da página</h1>
//       <hr />
//     </header>
//   );
// }

const App = () => {
  return (
    //Agora iremos criar uma tag com o nome do componente para ser exportado
    <div>
   //Colocamos a tag Header aqui <Header/ >
      Opa, tudo bem?
    </div>
  );
}    

//O ideial é criar um arquivo para cada componente, crie uma pasta componentes na pasta src e adicione eles

export default App;