import logo from './logo.svg';
import './App.css';
import Theory from './ImpFiels/Theory';
import LifeCycleMethod from './ImpFiels/LifeCycleMethod';
import ReactExtra from './ImpFiels/ReactExtra';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <ReactExtra />
        <Theory/>
        <LifeCycleMethod />
      </header>
    </div>
  );
}

export default App;
