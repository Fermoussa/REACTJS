import { useState } from 'react';
import './App.css';

function App() {
  const [phrase, setPhrase] = useState("Bonjour tout le monde!");

  function modifier(e) {
    if (e.key === 'Enter') {
      // console.log("hello");
      setPhrase(e.target.value);
    }
  }

  return (
    <div className="App">
      <p>
        {phrase}
      </p>

      <p>
        <input type="text" onKeyDown={modifier} />
      </p>
    </div>
  );
}

export default App;
