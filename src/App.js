import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome'
import Message from './Components/Message';
import Hello from './Components/Hello';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import EventBind from './Components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind></EventBind>
      <FunctionClick></FunctionClick>
      <Counter></Counter>
      <Message></Message>
      <Greet name = "B"></Greet>
      <Greet name = "C"></Greet>
      <Greet name = "D"></Greet>
      <Welcome></Welcome>
      
      <Hello></Hello>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
