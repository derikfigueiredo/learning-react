import { useState } from 'react';

function App() {
  const [n, setN] = useState(0);

  function handleMore() {
    setN(n + 1);
  }

  function handleMinus() {
    setN(n - 1);
  }

  return (
    <div>
      <button onClick={handleMore}>+</button>
      <div>{n}</div>
      <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default App;
