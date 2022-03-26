import './App.css';
import Answer from './components/Answer/Answer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <Answer></Answer>
    </div>
  );
}

export default App;
