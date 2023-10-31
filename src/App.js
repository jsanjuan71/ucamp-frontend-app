import logo from './logo.svg';
import './App.css';
import Button from './components/Button/button';

function App() {
  return (
    <div className="App">
      <h1>Hola react</h1>

      <Button text="Sign in" />

      <Button text="Add to cart" whiteBg={true} />
    </div>
  );
}

export default App;
