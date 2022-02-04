import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/counter/counter';

function App() {

  const [display, setDisplay] = useState(true);

  const handleToggleDisplay = () => {
    setDisplay(d => !d);
  }

  return (
    <div className="App">
      <h1>Demo 06 - Le cycle de vie</h1>

      <button onClick={handleToggleDisplay}>Jour/Nuit</button>
      {display &&(
        <Counter />
      )}

    </div>
  );
}

export default App;
