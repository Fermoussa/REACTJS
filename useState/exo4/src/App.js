import './App.css';

function App() {

  function focusIn(e){
    // console.log(e.target);
    e.target.style.background = "green";
  }

  function focusOut(e){
    // console.log(e.target);
    e.target.style.background = "white";
  }

  return (
    <div className="App">
      <input type="text" onFocus={focusIn} onBlur={focusOut} />
    </div>
  );
}

export default App;
