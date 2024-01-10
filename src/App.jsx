import './App.css'
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import Lista from './Lista/Lista';
import ListaNowPlaying from "./ListaNowPlaying/ListaNowPlaying";
import Lista2 from "./Lista2/Lista2";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Lista />
      <ListaNowPlaying />
      <Lista2 />
    </div>
  );
}

export default App;
