import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/counter/counter';

function App() {

  const [display, setDisplay] = useState(true);

  useEffect(() => {
    console.log('Effect: App !');

    return () => {
      console.log('Effect: Clear App !');
    };
  });

  const handleToggleDisplay = () => {
    console.log('Bouton: Jour/Nuit');
    setDisplay(d => !d);
  };

  return (
    <div className="App">
      {console.log('Render App')}
      <h1>Demo 06 - Le cycle de vie</h1>

      <button onClick={handleToggleDisplay}>Jour/Nuit</button>
      {display && (
        <Counter />
      )}

    </div>
  );
}

export default App;
