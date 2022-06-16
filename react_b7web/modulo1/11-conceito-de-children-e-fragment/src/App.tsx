import { Header } from './components/Header';
import { Photo } from './components/Photo';

const App = () => {
  return (
    <div>
      <Header title='UM TITULO' />
      <Photo url="https://www.google.com.br/logos/google.jpg"
       legend="Uma legenda para essa foto"/>
    </div>
  )
}

export default App;
