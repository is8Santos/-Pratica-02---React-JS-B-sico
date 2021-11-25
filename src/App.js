// import logo from './logo.svg';
import oi from './Sharingan-png.png';
import './App.css';
import Main from './main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={oi} className="App-logo" alt="logo" />
        <Main/>
      </header>
    </div>
  );
}

export default App;
