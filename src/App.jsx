import './App.css'
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import Lista from './Lista/Lista';
import ListaNowPlaying from "./ListaNowPlaying/ListaNowPlaying";


function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Lista />
      <ListaNowPlaying />
    </div>
  )
}

export default App