import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3'
      }
    ]
  }

  render() {
    const { posts } = this.state;

    return (    
//EM UMA LISTA, TODOS OS ELEMENTOS CRIADOS PELO MAP DEVEM TER UM KEY, ID

//É errado: eu precis o de ter apenas um elemento root, no JSX não é aceito retornar dois elementos(h1 e p), criamos um elemento apenas
//É  necessário também uma chave nesse elemento root. Todo map em JSX deve retornar um elemento com a chave

/*{posts.map(post => (
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          ))}
*/
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          ))}
       </div>
    ); 
  }
}

export default App;
