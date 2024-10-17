import "./App.css";
import logo from "./mcw-logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Gabriella Dubas</footer>
      </div>
    </div>
  );
}

export default App;
